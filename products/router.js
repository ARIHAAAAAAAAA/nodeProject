import express from 'express';
import productController from './controller.js';
import { checkPrice } from './middleware.js';

const productRouter = express.Router();
// middleware
productRouter.get('/', checkPrice, async(req, res) => {
  let foo = await productController.getAllProduct(res)
  await res.send(foo)
});

productRouter.get('/:id',productController.getProductById);

productRouter.post('/',productController.postAddProduct);

productRouter.delete('/:id',productController.deleteProductById);

productRouter.put('/:id',productController.putProductById);




export default productRouter