const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/orders', controller.createOrder);
router.get('/orders', controller.getAllOrders);
router.get('/orders/:id', controller.getOrderById);
router.patch('/orders/:id', controller.updateOrder);
router.delete('/orders/:id', controller.deleteOrder);

export default router;
