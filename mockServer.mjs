import express from 'express';
import cors from 'cors';
import products from './serverMockData/products.json';

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API endpoints are defined here

app.get('/api/products', (req, res) => {
  return res.send(products);
});

// End of API endpoints are here

app.listen(PORT, () => console.log(`Mock server listening on port ${PORT}!`));
