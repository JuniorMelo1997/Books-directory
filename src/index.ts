import express, {json} from "express";
import { db } from "./database/dbConnections";
import { routes } from "./routes";

const app = express();

app.use(json());
app.use(routes);

app.listen(3000, async()=>{
    await db.sync();
    console.log("App is running");
})