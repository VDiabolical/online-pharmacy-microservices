const express = require('express');
const app = express();
app.use(express.json());

const medicines = [
  { id: 1, name: 'Paracetamol', price: 10 },
  { id: 2, name: 'Ibuprofen', price: 15 }
];

app.get('/medicines', (req, res) => {
  res.json(medicines);
});

app.listen(3000, () => {
  console.log("Medicine Service is running on port 3000");
});
