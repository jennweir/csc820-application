# CSC820 Module 9

Building a RESTful API with Node.js and Express.js

## Running API Locally

### Dependencies and Installation

`node -v` is v24.14.1

`npm -v` is 11.11.0

`npm install express sequelize sqlite3 jsonwebtoken ajv`

### Run the API

To run the API locally, execute the following command:

`node app.js`

> Prior to each run, it is recommended to remove the `api/storage/data.db` file that tracks the contents of the SQLite database stored locally. This file is not committed in GitHub and is re-initialized upon each restart of the API for local testing.

Once running on your local machine, run curl calls in a separate terminal against `localhost:3000` to test. If a different port is desired, overwrite the `PORT` environment variable with the following syntax: `PORT=<port> node app.js`.

### Sample Test Calls

```bash
# 1. POST /orders - Create a new order
curl -X POST http://localhost:3000/orders \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": "001",
    "customerEmail": "johndoe@email.com",
    "items": ["item1", "item2"],
    "totalPrice": 99
  }'

# 2. GET /orders - Retrieve all orders
curl http://localhost:3000/orders

# 3. GET /orders/:id - Retrieve a specific order by ID
curl http://localhost:3000/orders/1

# 4. PATCH /orders/:id - Update order status by ID
curl -X PATCH http://localhost:3000/orders/1 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "Shipped"
  }'

# 5. DELETE /orders/:id - Delete an order by ID
curl -X DELETE http://localhost:3000/orders/1
```
