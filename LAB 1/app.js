const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { errorHandler, notFoundHandler } = require('./middleware/errorhandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(notFoundHandler);
app.use(errorHandler);

// Create data directory and data.json if they don't exist
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

const dataFilePath = path.join(dataDir, 'data.json');
if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2), 'utf8');
}

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Hello World API!',
        version: '1.0.0',
        endpoints: {
            greetings: '/api/greetings',
            methods: ['GET', 'POST', 'PUT', 'DELETE']
        }
    });
});

// Sample /api/greetings route
app.get('/api/greetings', (req, res) => {
    res.json({ greeting: "Hello friend! 👋" });
});

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`API Documentation: http://localhost:${PORT}`);
});

module.exports = app;
