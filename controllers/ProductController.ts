import type { Request, Response } from 'express';
import Product from '../models/Product';
  
   //Get All Product
   const getAllProduct = async(req :Request,res:Response)=>{
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error : any) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }

   }
  
   //Create Product
   const createProduct = async(req :Request,res:Response)=>{
    const { name, description, price, quantity } = req.body;

    if (!name || !price || !quantity) {
      return res.status(400).json({ message: 'Invalid input data' });
    }

    try {
      const product = await Product.create({ name, description, price, quantity });
      const newProduct = { id: product, name, description, price, quantity };
      res.status(201).json(newProduct);
    } catch (error : any) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }

   }

   //Get Element By Id
   const getProductById = async(req: Request, res: Response)=>{
    const id = parseInt(req.params.id);
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
      } catch (error :any) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
      }
   }

   //Update a product by Id
   const updateProduct = async(req: Request, res: Response) => {
    const product = await Product.findByPk(req.params.id);
    const { name, description, price, quantity }= req.body;

    if (!name || !price || !quantity) {
      return res.status(400).json({ message: 'Invalid input data' });
    }

    try {  
      if (product) {
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.quantity = quantity || product.quantity;
        await product.save();
        res.status(200).json(product);
      }
      else {
        return res.status(404).json({ message: 'Product not found' });
      }
      
    } catch (error : any) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
  }

    //Delete a product
    const deleteProduct = async(req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      const product = await Product.findByPk(id);
      if (product) {
        await product.destroy();
      res.status(200).json({ message: 'Product deleted successfully' });
      }
      else{
        return res.status(404).json({ message: 'Product not found' });
      }
    } catch (error :any) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
  }

module.exports = {
  getAllProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
}

