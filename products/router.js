import express from 'express';
import productController from './controller.js';
import { checkPrice } from './middleware.js';

const productRouter = express.Router();
// middleware
productRouter.get('/', checkPrice, productController.getAllProduct);

productRouter.get('/:id',productController.getProductById);

productRouter.post('/',productController.postAddProduct);

productRouter.post('/many',productController.postAddProducts);

productRouter.delete('/:id',productController.deleteProductById);

productRouter.put('/:id',productController.putProductById);




export default productRouter