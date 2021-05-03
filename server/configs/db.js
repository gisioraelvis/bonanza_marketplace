import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(
      `MongoDB connected: ${conn.connection.host}`.green.underline.bold
    );
  } catch (error) {
    console.error(`Error connectingDB: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
