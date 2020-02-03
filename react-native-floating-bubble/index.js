import { NativeModules } from 'react-native';

const { RNFloatingBubble } = NativeModules;

export const showFloatingBubble = () => RNFloatingBubble.showFloatingBubble();
export const hideFloatingBubble = () => RNFloatingBubble.hideFloatingBubble();
export const requestPermission = () => RNFloatingBubble.requestPermission();
export const initialize = () => RNFloatingBubble.initialize();
export default { showFloatingBubble, hideFloatingBubble, requestPermission, initialize };
