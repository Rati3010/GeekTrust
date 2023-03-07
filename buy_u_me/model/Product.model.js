import mongoose from "mongoose";

const productSchema = ({
    productId: Number,
    quantity: Number,
    operation: String
})

const ProductModel = mongoose.model('product', productSchema);

export { ProductModel }