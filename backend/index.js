// const express = require('express');
// const cors = require('cors');
// const app = express();
// require('dotenv').config();
// require('./models/dbConnect');
// const authRoutes = require('./routes/authRoutes');
// const PORT = process.env.PORT || 8080;

// // app.use(cors());
// app.use(cors({ origin: `${process.env.FRONTEND_URL}` ,credentials: true })); 
// app.use('/auth/', authRoutes); // <- NEW LINE

// app.all('*', (req, res, next) => {
//     next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`)
// })



const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./models/dbConnect');
const authRoutes = require('./routes/authRoutes');
const AppError = require('./utils/AppError'); // Import AppError
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: `${process.env.FRONTEND_URL}`, credentials: true }));
app.use('/auth/', authRoutes);

// Default route for the root path
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to the API!',
    });
});

// Handle undefined routes
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

// Error-handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';

    res.status(statusCode).json({
        status,
        message: err.message,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
