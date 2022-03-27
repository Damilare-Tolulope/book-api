const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected to the database successfully");
});

// Book Route
const bookRoutes = require("./routes/Books.js");

app.use("/books", bookRoutes);

// Listen on a port
const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`Book api server running on port ${port}`));
