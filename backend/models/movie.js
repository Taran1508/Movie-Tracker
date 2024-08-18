const mongoose = require('mongoose');

// Replace these values with your actual MongoDB credentials
const username = 'gayathrikandibanda2003';
const password = 'Krishna%401008'; // Ensure this is URL-encoded if necessary
const cluster = 'cluster0.ttzqwmu.mongodb.net';
const database = 'mydatabase'; // Replace with your actual database name

const url = `mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority`;

async function connectToMongoDB() {
  try {
    // Connect to MongoDB
    await mongoose.connect(url);
    console.log('Connected successfully to MongoDB server');

    // Access the database
    const db = mongoose.connection;
    console.log('Database:', db.name);

    // Define a schema and model
    const schema = new mongoose.Schema({ name: String });
    const Model = mongoose.model('Test', schema);

    // Create and save a document
    const doc = new Model({ name: 'Test Document' });
    await doc.save();
    console.log('Document saved:', doc);

    // Find a document
    const foundDoc = await Model.findOne({ name: 'Test Document' });
    console.log('Found document:', foundDoc);

  } catch (err) {
    console.error('An error occurred while connecting to MongoDB:', err);
  } finally {
    // Close the connection
    await mongoose.disconnect();
    console.log('Connection closed');
  }
}

connectToMongoDB().catch(console.error);
