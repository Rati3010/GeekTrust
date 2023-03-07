import express from "express";
import { connection } from "./config/db.js";
import productRoute from "./routes/Product.route.js";
const app = express();
app.use(express.json());
app.use("/product", productRoute)

app.listen(8080, async () => {
    try {
        await connection;
        console.log('connected to database')
    } catch (error) {
        console.log("Unable to connect the data base")
    }
})