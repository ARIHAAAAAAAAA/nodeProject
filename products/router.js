import express from 'express';
import productController from './controller.js';

const productRouter = express.Router();

productRouter.get('/',productController.getAllProduct);

productRouter.get('/:id',productController.getProductById);

productRouter.post('/',productController.postAddProduct);

productRouter.delete('/:id',productController.deleteProductById);

productRouter.put('/:id',productController.putProductById);




export default productRouter