import { connectToDatabase } from "./mongoConnect.js";

// get all
async function allProductMongo() {
    const [collection, clint] = await connectToDatabase()
    const findResult = await collection.find({}).toArray();
    clint.close()
    return findResult
}

// one
async function addProductMongo(product) {
    const [collection, client] = await connectToDatabase()
    const result = await collection.insertOne(product)
    client.close()
    return result
}
// many
async function addProductsMongo(products) {
    const [collection, client] = await connectToDatabase()
    const result = await collection.insertMany(products)
    client.close()
    return result
}
// id
async function getProductMongoById(id) {
    const [collection, client] = await connectToDatabase()
    const filteredDocs = await collection.find(
        { id: id }).toArray();
    client.close()
    return filteredDocs

}

async function upDateProductByIdMongo(id,body){
    const [collection, client] = await connectToDatabase()
    const updateResult = await collection.updateOne(
        { id: id },
        { $set: body } 
        );
        client.close()
        return updateResult
}

async function deleteProductMongo(id){
    const [collection, client] = await connectToDatabase()
    const deleteResult = await collection.deleteOne(
        { id: id }
        );
        client.close()
        return deleteResult

}




const productMongoDal = {
    allProductMongo,
    addProductMongo,
    addProductsMongo,
    getProductMongoById,
    upDateProductByIdMongo,
    deleteProductMongo,
}
export default productMongoDal