const express = require('express');
const app = express();

const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Static Website');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});