import { Request, Response } from 'express';
import db from '../data/database';

export const getAllPacks = (req: Request, res: Response) => {
    const sql = 'SELECT * FROM packs';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Erro na consulta SQL: ' + err.message);
            res.status(500).json({ error: 'Erro ao buscar produtos' });
        } else {
            res.json(results);
        }
    });
};