import express from 'express';
const {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct
  } = require('../controllers/ProductController');

const router = express.Router();

// Route 1 : Get All the Product using: Get "/api/product".
router.get('/product', getAllProduct);

// Route 2 : Get Product by Id using: Get "/api/product/:id".
router.get('/product/:id', getProductById);

// Route 3 : Create Product by Id using: Post "/api/product".
router.post('/product', createProduct);

// Route 4 : Update Product by Id using: Put "/api/product/:id".
router.put('/product/:id', updateProduct);

// Route 5 : Delete Product by Id using: Put "/api/product/:id"
router.delete('/product/:id', deleteProduct);

export default router;