import express from 'express';
import connectToMysql from './db';
import cors from 'cors';
import ProductRoutes from './routes/productRoutes';


// connecting Database
// connectToMysql();

const app =express();
const port = 3000;

app.use(express.json());
app.use(cors());


//Routes
app.use('/api',ProductRoutes);

app.get('/',(req,res)=>{
    res.send("Hi Suparna");
})

app.listen(port,()=>{
console.log(`Server listening in http://localhost:${port}`);
})