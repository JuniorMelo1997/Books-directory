import express from "express";
import { db } from "./database/dbConnections";

const app = express();

app.listen(3000, async()=>{
    await db.sync();
    console.log("App is running");
})