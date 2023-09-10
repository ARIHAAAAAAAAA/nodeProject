import productDal from "./dal.js";
import productMongoDal from "../mongoDal.js";

// connect to mongo

// get all
const allProduct = async () => {
    const allProducts = await productMongoDal.allProductMongo();
    return allProducts;
}
// create many
const addProducts = async (newProducts) => {
    const products = await productMongoDal.addProductsMongo(newProducts)
    return products
}
// create one
const addProduct = async (newProduct) => {
    const products = await productMongoDal.addProductMongo(newProduct)
    return products
}
// get id
const ProductById = async (id) => {
    const product = await productMongoDal.getProductMongoById(id);
    return product
}
// update
const upDateProductById = async (id,body) => {
    const product = await productMongoDal.upDateProductByIdMongo(id,body);
    return product
}

const removeProductById = async (id) => {
    const product = await productMongoDal.deleteProductMongo(id);
    return product
   
}


// connect to json
// const allProduct = async () => {
//     const allProduct = await productDal.readFiles();
//     return allProduct;
// }

// const ProductById = async (id) => {
//     const product = await productDal.readFiles();
//     const resultId = product.find((element) => element.id === id);
//     return resultId
// }

// const addProduct = async (newProduct) => {
//     const products = await productDal.readFiles();
//     products.push(newProduct);
//     productDal.writeFiles(products);
//     return products
// }

// const removeProductById = async (id) => {
//     const product = await productDal.readFiles();
//     const resultIndex = product.filter((element, index, arr) => {
//         return element.id != id ? arr.push(element) : null
//     })
//     productDal.writeFiles(resultIndex)
//     return resultIndex
// }

// const upDateProductById = async (id,body) => {
//     const product = await productDal.readFiles();
//     const resultElement = product.find(element => element.id === id)
//       for (const key in resultElement) {
//         resultElement[key] = body[key]; 
//       }
//     productDal.writeFiles(resultElement)
//     return resultElement
// }


const productService = {
    allProduct,
    ProductById,
    addProducts,
    addProduct,
    removeProductById,
    upDateProductById,
}

export default productService