import mongoose from "mongoose";

const Connection = async (username = "usercode", password = "123user") => {
  const URL = `mongodb://${username}:${password}@ac-2dwji0d-shard-00-00.nsrztuk.mongodb.net:27017,ac-2dwji0d-shard-00-01.nsrztuk.mongodb.net:27017,ac-2dwji0d-shard-00-02.nsrztuk.mongodb.net:27017/BHUSHANNEW?ssl=true&replicaSet=atlas-e9kw8j-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;
