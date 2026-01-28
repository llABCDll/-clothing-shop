import { query } from "../db/index.js";

export const getAllProducts = async () => {
    const result = await query("SELECT * FROM products ORDER BY id");
    return result.rows;
};

export const createProduct = async (name, price) => {
    const result = await query(
        "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *",
        [name, price]
    );
    return result.rows[0];
};