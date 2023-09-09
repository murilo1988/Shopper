// src/routes/productRoutes.ts
import { Router } from 'express';
import * as productController from '../controllers/ProductController'
import * as packController from '../controllers/PackController'
const router = Router();

router.get('/products', productController.getAllProducts);
router.get('/packs', packController.getAllPacks)
router.put('/products/:code', productController.updateProductPrice);

export default router;
