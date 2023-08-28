import jsonfile from 'jsonfile';


async function readFiles() {
    const data = jsonfile.readFileSync('./data/product.json')
    return data    
}

async function writeFiles(newData) {
    // const fetch1 = await fetch('https://fakestoreapi.com/products')
    // const dataFetch = await fetch1.json()
    jsonfile.writeFileSync('./data/product.json', newData)
    return newData

}

const productDal = {
    readFiles,
    writeFiles
}

export default productDal;