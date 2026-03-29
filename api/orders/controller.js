import order from './common/models/Order';
const Order = order(sequelize);

app.post('/orders', (req, res) => {
  // Create a new order.

  res.status(201).json({ message: 'Order created' });
});

app.get('/orders', async (req, res) => {
  // Retrieve all orders.
  try {
    // findAll is sequelize's way of finding all values in a table
    const orders = await Order.findAll();
    res.status(200).json({
      success: true,
      count: orders.length,
      orders: orders
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to find orders',
      details: error.message
    });
  }
});

app.get('/orders/:id', async (req, res) => {
  // Retrieve a specific order by ID.
  try {
    // findByPk is sequelize's way of finding a value by its ID
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({
        error: 'Order not found'
      });
    }
    res.status(200).json({
      success: true,
      order: order
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to find order',
      details: error.message
    });
  }
});

app.patch('/orders/:id', async (req, res) => {
  // Update an order status (e.g., "Pending" to "Shipped").
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({
        error: 'Order not found'
      });
    }
    // Update the order status
    order.status = req.body.status || order.status;
    await order.save();
    res.status(200).json({
      success: true,
      order: order
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to update order',
      details: error.message
    });
  }
});

app.delete('/orders/:id', (req, res) => {
  // Cancel/remove an order.
  res.json({ message: 'Order deleted' });
});