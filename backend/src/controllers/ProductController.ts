// src/controllers/productController.ts
import { Request, Response } from 'express';
import db from '../data/database';

export const getAllProducts = (req: Request, res: Response) => {
    const sql = 'SELECT * FROM products';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erro na consulta SQL: ' + err.message);
            res.status(500).json({ error: 'Erro ao buscar produtos' });
        } else {
            res.json(results);
        }
    });
};

export const updateProductPrice = (req: Request, res: Response) => {
    const productId = parseInt(req.params.code);
    const newPrice = req.body.sales_price;
    console.log(`Received request to update product with code ${productId}`);

    db.query('UPDATE products SET sales_price = ? WHERE code = ?', [newPrice, productId], (err) => {
        if (err) {
            console.error('Erro ao atualizar o preço do produto:', err);
            res.status(500).json({ success: false, message: 'Erro ao atualizar o preço do produto.' });
        } else {
            res.json({ success: true, message: 'Preço do produto atualizado com sucesso.' });
        }
    });
};
export function getAllPacks(arg0: string, getAllPacks: any) {
    throw new Error('Function not implemented.');
}

