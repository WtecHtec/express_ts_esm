import express from "express";
import cors from "cors";
import routes from "./routes";
import { GetPath } from "./util/common";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.static(GetPath("/public")));

const PORT = process.env.PORT || 5698;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT};`);
});
