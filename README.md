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
