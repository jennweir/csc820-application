const express = require('express');
const app = express();
const sequelize = require('./common/database');
const order = require('./common/models/Order');
const Order = order(sequelize);

app.use(express.json());
sequelize.sync();

app.get('/status', (req, res) => {
  res.json({
    status: 'Running',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

