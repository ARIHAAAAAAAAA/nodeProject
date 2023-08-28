import productDal from "./dal.js";

const allProduct = async () => {
    const allProduct = await productDal.readFiles();
    return allProduct;
}

const ProductById = async (id) => {
    const product = await productDal.readFiles();
    const resultId = product.find((element) => element.id === id);
    return resultId
}

const addProduct = async (newProduct) => {
    const products = await productDal.readFiles();
    products.push(newProduct);
    productDal.writeFiles(products);
    return products
}

const removeProductById = async (id) => {
    const product = await productDal.readFiles();
    const resultIndex = product.filter((element, index, arr) => {
        return element.id != id ? arr.push(element) : null
    })
    productDal.writeFiles(resultIndex)
    return resultIndex
}

const upDateProductById = async (id,body) => {
    const product = await productDal.readFiles();
    const resultElement = product.find(element => element.id === id)
      for (const key in resultElement) {
        resultElement[key] = body[key]; 
      }
    productDal.writeFiles(resultElement)
    return resultElement
}





const productService = {
    allProduct,
    ProductById,
    addProduct,
    removeProductById,
    upDateProductById,
}

export default productService