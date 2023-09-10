import jsonfile from 'jsonfile';


async function readFiles() {
    const data = jsonfile.readFileSync('./data/product.json')
    return data    
}

async function writeFiles(newData) {
    jsonfile.writeFileSync('./data/product.json', newData)
    return newData

}

const productDal = {
    readFiles,
    writeFiles
}

export default productDal;