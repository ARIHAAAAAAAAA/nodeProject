import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Create a new MongoClient
const client = new MongoClient(url);

// Function to connect to the database
export async function connectToDatabase() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        const db = client.db("test");
        const collection = db.collection("users")
        return [collection,client]
    
    } catch (err) {
        console.error('Error connecting to the MongoDB server:', err);
    }
    // finally {
    //     client.close()
    // }
}