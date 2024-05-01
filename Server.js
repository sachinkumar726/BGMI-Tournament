require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const uri = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function startServer() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        app.post('/register', async (req, res) => {
            const { name, email, password } = req.body;
        
            try {
                const db = client.db('resulttracker');
                const usersCollection = db.collection('users');
        
                // Check if the user already exists
                const existingUser = await usersCollection.findOne({ email });
                if (existingUser) {
                    return res.status(400).json({ error: 'User already exists' });
                }
        
                // Generate a token for the new user
                const token = jwt.sign({ email, name }, jwtSecret, { expiresIn: '1h' });
        
                // Create a new user document with the token
                const newUser = { name, email, password, token };
        
                // Insert the new user document into the 'users' collection
                const result = await usersCollection.insertOne(newUser);
                console.log('User registered successfully:', result.insertedId);
        
                res.status(201).json({ message: 'User registered successfully', token });
            } catch (error) {
                console.error('Error registering user:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });



        app.post('/login', async (req, res) => {
            const { email, password } = req.body;
        
            try {
                const db = client.db('resulttracker');
                const usersCollection = db.collection('users');
        
                // Find user by email in the database
                const user = await usersCollection.findOne({ email });
        
                console.log('User found:', user); // Log user object for debugging
        
                // If user not found or password doesn't match
                if (!user || user.password !== password) {
                    console.log('Login failed - Invalid credentials'); // Log failure reason
                    return res.status(401).json({ error: 'Invalid credentials' });
                }
        
                // If user and password are valid, login successful
                console.log('Login successful');
                res.status(200).json({ message: 'Login successful' });
            } catch (error) {
                console.error('Login error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
        
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
        
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas', error);
        process.exit(1);
    }
}

startServer();