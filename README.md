# Bonanza Marketplace
A fullstack reactjs, redux, nodejs, express &amp; MongoDB(MERN) eCommerce website.

Link to live project on heroku [bonanza-marketplace.herokuapp.com](https://bonanza-marketplace.herokuapp.com/)

![screenshot]()

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

### ES Modules in Node

Using ECMAScript Modules in the backend in this project.

Node v14.6+.

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = jwt secret
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend
npm run client

# Run backend only with nodemon
npm run devserver

# Run backend and frontend using concurrently (:3000) & backend (:5000)
npm run dev
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

Includes Heroku postbuild script, for pushing to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import-data

# Destroy data
npm run data:destroy-data
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```

