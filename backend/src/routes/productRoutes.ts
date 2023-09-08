// src/routes/productRoutes.ts
import { Router } from 'express';
import * as productController from '../controllers/ProductController'
const router = Router();

router.get('/products', productController.getAllProducts);
router.put('/products/:code', productController.updateProductPrice);

export default router;
