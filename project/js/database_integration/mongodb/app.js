// Import the MongoClient class from the mongodb package
const { MongoClient } = require('mongodb');

// Define an asynchronous main function to perform MongoDB operations
async function main() { 
    // MongoDB connection string for a local MongoDB instance
    const uri = "mongodb://localhost:27017"; 
    
    // Create a new MongoClient instance with the connection string
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try { 
        // Connect to the MongoDB server
        await client.connect();
        console.log("Connected successfully to MongoDB");

        // Select the database and collection you want to use
        const database = client.db('testdb'); 
        const collection = database.collection('testcollection');

        // Insert a document into the collection
        const insertResult = await collection.insertOne({ name: "John", age: 30 });
        console.log('Inserted document:', insertResult);

        // Find a document in the collection
        const findResult = await collection.findOne({ name: "John" });
        console.log('Found document:', findResult); 

    } finally {
        // Close the connection to the MongoDB server
        await client.close();
    }
} 

// Run the main function and catch any errors that occur
main().catch(console.error);