import express from "express";
import { ProductModel } from "../model/Product.model.js"
const productRoute = express.Router();

productRoute.post("/post", async (req, res) => {
    const payload = req.body;
    try {
        await ProductModel.insertMany(payload);
        res.json({ "message": "Inserted successfully" });
    } catch (error) {
        res.json({ "error": "Insert unsuccessfull" });
    }
})

export default productRoute