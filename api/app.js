const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoutes");

dotenv.config();
const app = express();

app.use(express.urlencoded({
    extended: false
  }));
app.use(express.json());
app.use(cors());

// Routing
app.use('/api/user/', userRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;