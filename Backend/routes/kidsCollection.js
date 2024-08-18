import express from 'express';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../controllers/kidsCollection.js';

const router = express.Router();

router.get('/kids', (req, res) => {
    console.log('GET /kids endpoint hit');
    getProducts(req, res);
});
  
router.post('/kids', addProduct);
router.put('/kids/:id', updateProduct);
router.delete('/kids/:id', deleteProduct);

export default router;