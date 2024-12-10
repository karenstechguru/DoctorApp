const express = require('express');
const routes = require("./routes/authRouter.js");
const AuthRouter = require('./routes/user-AuthRouter.js');
const docAuth = require('./routes/doc-Routes.js');
const schedule = require("./routes/Schedule.js");
const userBookings = require('./routes/userBookingRoutes.js');
const prescription = require('./routes/PrescriptionRoutes.js');
require("./db/conn.js");
var cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = 3002;

// Configure CORS
var corsOptions = {
    origin: 'http://127.0.0.1:3000', // Frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
};

// Apply middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use(routes);
app.use('/auth', AuthRouter);
app.use('/docauth', docAuth);
app.use('/Booking', userBookings);
app.use('/pres', prescription);
app.use(schedule);

// Start the server
app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server running on port ${PORT}`);
    } else {
        console.error(err);
    }
});
