import mongoose from "mongoose";
const databaseName = "manageEmployee";
const mongodbConnectionString =
  "mongodb+srv://shuvkant:shuvkant@cluster0.pp5na.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(mongodbConnectionString)
      .then(() => {
        console.log(
          `Mongodb connected ||DB host: `,
        );
      });
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR");
  }
};

export default connectDB;
