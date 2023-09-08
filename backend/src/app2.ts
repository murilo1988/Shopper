// src/app.ts
import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';


dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const app: Application = express();
const port: number = parseInt(process.env.PORT as string, 10) || 3000;

app.use(cors());

// Middleware para analisar solicitações JSON
app.use(express.json());

// Usar as rotas
app.use('/api', productRoutes);


app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
