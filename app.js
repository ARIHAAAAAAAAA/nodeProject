import express from 'express';
import productRouter from './products/router.js';
import axios from 'axios';
import productDal from "./products/dal.js";
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))
const port = 8080;



app.use('/api/product', productRouter);

app.listen(port, () => {
    console.log(`example app listening on ${port}`);
    console.log("did u update?? yes:)");
    const info = async () => {
        const serverData = await axios.get('https://fakestoreapi.com/products')
        const allData = serverData.data
        productDal.writeFiles(allData)
    }
    info()
});
