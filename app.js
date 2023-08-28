import express from 'express';
import productRouter from './products/router.js';
import axios from 'axios';
import productDal from "./products/dal.js";

const app = express();
app.use(express.json());

const port = 8080;



app.use('/api/product', productRouter);

app.listen(port, () => {
    console.log(`example app listening on ${port}`);
    const info = async () => {
        const serverData = await axios.get('https://fakestoreapi.com/products')
        const allData = serverData.data
        productDal.writeFiles(allData)
    }
    info()
});
