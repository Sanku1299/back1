const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://sankalp12:123@node.gwp04.mongodb.net/?retryWrites=true&w=majority&appName=Node"
  );
};

module.exports = {connectDB}