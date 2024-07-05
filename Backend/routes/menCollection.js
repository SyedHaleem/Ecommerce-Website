

import express from 'express';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../controllers/menCollection.js';

const router = express.Router();


router.get('/mens', (req, res) => {
    console.log('GET /mens endpoint hit');
    getProducts(req, res);
  });
  

router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
