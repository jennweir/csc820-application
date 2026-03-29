import order from './common/models/Order';
const Order = order(sequelize);

app.post('/orders', (req, res) => {
  // Create a new order.
  
  res.status(201).json({ message: 'Order created' });
});

app.get('/orders', (req, res) => {
  // Retrieve all orders.
  res.json({ orders: [] });
});

app.get('/orders/:id', (req, res) => {
  // Retrieve a specific order by ID.
  res.json({ order: { id: req.params.id } });
});

app.patch('/orders/:id', (req, res) => {
  // Update an order status (e.g., "Pending" to "Shipped").
  res.json({ message: 'Order updated' });
});

app.delete('/orders/:id', (req, res) => {
  // Cancel/remove an order.
  res.json({ message: 'Order deleted' });
});