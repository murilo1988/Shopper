import express, { Request, Response, Router } from 'express';
import * as productService from '../service/productsService'
const router: Router = express.Router();

router.get('/products', async function (req, res) {
    const products = await productService.getProducts()

    res.json(products);
});
router.get('/products/:id', async function (req, res) { });
router.post('/products', async function (req, res) { });
router.put('/products/:id', async function (req, res) { });
router.delete('/products/:id', async function (req, res) { });

export default router;
