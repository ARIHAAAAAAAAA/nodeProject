import productService from "./service.js";


const getAllProduct =  async (res) => {
    try {
        const products = await productService.allProduct();
        // res.status(200).send(products)
        return products
    }
    catch (err) {
        res.status(404).send('product is not found')
    }
}

const getProductById = async (req, res) => {
    try {
        const id = +req.params.id;
        const product = await productService.ProductById(id);
        res.status(200).json(product)
    }
    catch (err) {
        res.status(404).send('product is not found')
    }
}

const postAddProduct = async (req, res) =>{
    try{
        const newProduct = req.body;
        const add = await productService.addProduct(newProduct);
        res.status(200).json(newProduct);
    }
    catch (err) {
        res.status(404).send('product is not found')
    }
}

const deleteProductById = async (req,res)=>{
    try{
        const id = Number(req.params.id);
        const product = await productService.removeProductById(id);
        res.status(200).json(product)
    }
    catch (err) {
        res.status(404).send('product is not found')
    }
    
}

const putProductById = async (req,res)=>{
    try{
        const id = Number(req.params.id);
        const body = req.body;
        const product = await productService.upDateProductById(id,body);
        res.status(200).send(product)
    }
    catch (err) {
        res.status(404).send('product is not found')
    }
    
}

const productController = {
    getAllProduct,
    getProductById,
    postAddProduct,
    deleteProductById,
    putProductById,
    
}

    export default productController