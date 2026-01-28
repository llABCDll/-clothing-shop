import { getAllProducts as getProductFromDB, createProduct} from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await getProductFromDB();
        res.json(products);
    } catch (err) {
        console.error(err);
    res.status(500).json({ massage: "Server error"});
        }
    };

    export const addProduct = async (req, res) => {
        try {
            const { name, price } = req.body;

            if (!name || ! price) {
                return res.status(400).json({ massage: "Name and price required"});
            }
            const newProduct = await createProduct(name, price);
            res.status(201).json(newProduct);
        } catch (err) {
            console.error(err);
            res.status(500).json({ massage: "Server error"});
        }
    };