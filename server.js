const express = require('express');
const mongoose = require('mongoose');
const { port, dbUri } = require('./config/config');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

mongoose.connect(dbUri)
.then(() => {
    console.log('Connected successfully to MongoDB at ${dbUri}');
    app.listen(port, () => console.log(`Server running on port ${port}`));
})
.catch((err) => console.error('Error connecting to MongoDB:', err));