import express from 'express';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../controllers/womenCollection.js';

const router = express.Router();

router.get('/womens', (req, res) => {
    console.log('GET /womens endpoint hit');
    getProducts(req, res);
});
  
router.post('/womens', addProduct);
router.put('/womens/:id', updateProduct);
router.delete('/womens/:id', deleteProduct);

export default router;
