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
  const { query } = req;

  if (Object.keys(query).length > 0) {
    for (const property in query) {
      const filtered = products.filter((item) => String(item[property]) === query[property]);

      res.send(filtered);
    }
  } else {
    return res.send(products);
  }
});

app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find((item) => item.id === id);

  if (product) {
    return res.send(product);
  } else {
    return res.status(404).send({
      error: 'Product not found!',
    });
  }
});

// End of API endpoints are here

app.listen(PORT, () => console.log(`Mock server listening on port ${PORT}!`));
