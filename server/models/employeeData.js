import mongoose, { Schema } from "mongoose";

const employeeDatabaseSchema = new Schema({
  name: String,
  email: String,
  department: String,
});

const employeeDatabaseModel = mongoose.model(
  "employeeDatabase",
  employeeDatabaseSchema,
);

export default employeeDatabaseModel;
