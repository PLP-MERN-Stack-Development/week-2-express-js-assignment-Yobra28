const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
