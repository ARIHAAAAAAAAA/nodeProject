import productDal from "./dal.js";

export const checkPrice = async (req, res, next) => {
    const data = await productDal.readFiles()
    data.forEach(element => {
        res.locals = element.price > 100 ;
    });
    next();
}

// export const checkPrice = async (req, res, next) => {
//     console.log('moshe');
//     const data = await productDal.readFiles()
//     res.locals = data.some(element => element.price > 100);
//     console.log(res.locals);
//     next();
// };
