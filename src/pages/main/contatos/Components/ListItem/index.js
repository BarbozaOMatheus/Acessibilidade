import React, { Component } from "react";
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Platform,
  Animated
} from "react-native";
import PropTypes from "prop-types";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

class ListItem extends Component {
  static propTypes = {
    leftElement: PropTypes.element,
    title: PropTypes.string,
    description: PropTypes.string,
    rightElement: PropTypes.element,
    rightText: PropTypes.string,
    onPress: PropTypes.func,
    onDelete: PropTypes.func,
    onLongPress: PropTypes.func,
    disabled: PropTypes.bool
  };

  renderRightAction = (iconName, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0]
    });

    const pressHandler = () => {
      const { onDelete } = this.props;
      if (onDelete) onDelete();
      this.close();
    };

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={pressHandler}
        >
          <Text style={{ color: "#fff" }}>Delete</Text>
        </RectButton>
      </Animated.View>
    );
  };

  renderRightActions = progress => (
    <View style={{ width: 64, flexDirection: "row" }}>
      {this.renderRightAction("trash", "#ef5350", 64, progress)}
    </View>
  );

  updateRef = ref => {
    this.swipeableRow = ref;
  };

  close = () => {
    this.swipeableRow.close();
  };

  render() {
    const {
      leftElement,
      title,
      numero,
      onPress,
      onLongPress,
      disabled
    } = this.props;

    const Component = onPress || onLongPress ? TouchableHighlight : View;

    const {
      itemContainer,
      leftElementContainer,
      titleStyle,
    } = styles;

    return (
      <Swipeable
        ref={this.updateRef}
        friction={1}
        renderRightActions={this.renderRightActions}
      >
        <Component
          onPress={onPress}
          onLongPress={onLongPress}
          disabled={disabled}
          underlayColor="#f2f3f5"
        >
          <View style={itemContainer}>            
            <Text style={titleStyle}>{title}</Text>
            <Text style={titleStyle}>{numero}</Text>                              
          </View>
        </Component>
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    borderColor: '#fabb00',
    borderWidth: 5,
    borderRadius: 70,
    padding: 10,
  },
  leftElementContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingLeft: 13,
  },
  titleStyle: {
    fontSize: 20,
    fontFamily: 'bold',
    fontWeight: '700',
    color: 'white'
  },

});

export default ListItem;