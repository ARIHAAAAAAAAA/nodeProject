import express from 'express';
import productRouter from './products/router.js';
import axios from 'axios';
import productDal from "./products/dal.js";
import morgan from 'morgan';

const app = express();

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//     );
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     if (req.method === "OPTIONS") {
//       res.sendStatus(200);
//       console.log(res);
//     } else next();
//   });

app.use(express.json());
// app.use(morgan('dev'))
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
