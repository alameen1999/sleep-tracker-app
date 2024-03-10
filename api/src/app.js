import express from "express";
import router from "./routes/userRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use('/sleep-entries', router);

app.listen(8000, () => {
    console.log("Connected to backend");
  });
  

export default app;
