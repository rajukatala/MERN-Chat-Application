const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
      const conn = await mongoose.connect("mongodb+srv://rajuram:raju@cluster0.zildl.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useCreateIndex:true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
