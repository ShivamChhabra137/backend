import { config } from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

config({ path: "./env" });

console.log(process.env.MONGODB_URI);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is up and running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB Connection Failed: ", err);
  });
