import * as RNFS from 'react-native-fs'

//exemplo de uso da função save
//save([var1, var2, ...], 'arquivo.txt')
//exemplo de uso da função read
//const result = await read('arquivo.txt')
//OBS: a função que for utilizar a função read tem que ser assincrona declarada com a palavra async

export const save = (array = [], fileName) => {
    var content = ''
    const filePath = `${RNFS.DocumentDirectoryPath}/${fileName}`

    if (array.length === 0)
        return;

    for (const data of array) {
        content = content + `${data.toString()}\n`    
    }

    RNFS.writeFile(filePath, content, 'utf8').then(success => {
      console.log('Dados salvos com sucesso!')
    }).catch(error => {
      console.error(error)
    })
}

export const read = async (fileName) => {
    const filePath = `${RNFS.DocumentDirectoryPath}/${fileName}`
    let data = undefined
    
    if (await RNFS.exists(filePath)) {
        const content = await RNFS.readFile(filePath, 'utf8')
            
        if (content !== '')
            data = content.split('\n') 
    }     
    //retorna um array de string com os dados do arquivo
    return data
}


