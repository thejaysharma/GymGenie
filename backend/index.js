const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./DBConnection");
const userRoutes = require("./Routes/userRoutes");

require("dotenv").config();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}..`);
});

//DB connection
connection();
