require('dotenv').config();  // Load environment variables
const express = require('express');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());  // To parse JSON requests

// Define routes
app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
