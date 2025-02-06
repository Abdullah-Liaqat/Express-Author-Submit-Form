# Odoo eCommerce and JWT Authentication Integration in NestJS with Odoo ERP 18.0

## Table Content

- [Overview](##Overview)

- [Features](##Features)

- [Technology Stack](#TechnologyStack)

- [Setup & Installation](#Setup&Installation)

- [API ](##api)

- [License](#license)
## Overview

This application integrates Odoo’s eCommerce functionalities with NestJS through external APIs, utilizing Odoo ERP 18.0. The integration allows seamless management of key business operations, including product listings, order processing, and cart management, by tapping into Odoo’s robust eCommerce capabilities.

To secure sensitive operations, the application incorporates JWT (JSON Web Token) authentication. This ensures that only authorized users can access protected routes, such as adding products to the cart, viewing orders, and updating cart items, providing a secure environment for eCommerce transactions.

By leveraging Odoo's external APIs for eCommerce features, users benefit from the full capabilities of Odoo ERP, while the system remains protected with token-based authentication to ensure both security and efficiency in the online store management.

- **Odoo Documentation**: [
- **Repository Clone Link**: [

## Features

- **JWT Authentication**: Secure routes with token-based authentication.
- **XML-RPC Integration**: Seamless communication between the NestJS application and Odoo ERP 17.0 for eCommerce management.
- **Basic eCommerce Features**:
  - Add products to the cart
  - View cart products
  - Update cart products
  - Remove products from the cart
- **Security Enhancements**: Strengthening application security through secure authentication practices.

## Technology Stack

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Odoo ERP 18.0**: Open-source business application suite for managing various business operations like sales, inventory, accounting, and more.
- **JWT (JSON Web Tokens)**: For securing API routes.
- **XML-RPC**: For integrating Odoo ERP with the NestJS application.

## Setup & Installation

Follow these steps to set up the application locally:

### Prerequisites

- Node.js (v16 or later)
- NPM (or Yarn)
- Odoo ERP 18.0 instance

### 1. Clone the repository

 bash
git clone https://github.com/alaparsalan/odoo-erp-nest-shop.git
cd odoo-erp-nest-shop


### 2. Install dependencies

Run the following command to install the necessary dependencies for the project:

 bash
npm install


### 3. Configure environment variables

Create a `.env` file in the root directory of the project and add the necessary environment variables:

 .env
ODOO_URL=<your_odoo_instance_url>
ODOO_DB=<your_odoo_db_name> 
ODOO_USERNAME=<your_odoo_username>
ODOO_PASSWORD=<your_odoo_password>
JWT_SECRET=<your_jwt_secret_key>



Make sure to replace the placeholders with your actual Odoo instance details and JWT secret key.

### 4. Run the application

Start the NestJS application locally:

 bash
npm run start:dev


This will start the server on `http://localhost:3000`.

### 5. Access the application

- Navigate to `http://localhost:3000` to access the eCommerce functionality.
- Use Postman or any API testing tool to test the JWT-secured routes.

---

## API

### 1. *Sign Up*

- *POST* `http://localhost:3000/auth/register`

**Request Body**:

json
{
  "name": "<your_name>",
  "password": "<your_password>",
  "new_password": "<new_password>",
  "email": "<your_email>"
}


**Response**:

json
{
  "message": "User Registered Successfully!",
  "ID": "your user ID is <ID>"
}


### 2. *Login*

- *POST* `http://localhost:3000/auth/signin`

**Request Body**:

json
{
  "email": "<your_email>",
  "password": "<your_password>"
}


**Response**:

json
{
  "message": "Login Successful",
  "token": "<encrypted_token>"
}


**Token Encryption**:
- The *JWT token* is encrypted with two key elements:
  - **User ID**: A unique identifier for the user, ensuring that each token is linked to a specific user.
  - *Partner ID**: The identifier used to manage *Odoo eCommerce functionalities**, such as product listings, orders, and customer data.

**Storing Token**:
- After a successful login, the JWT token is stored in the *browser's Local Storage*. This provides easy access to the token for making subsequent API calls, ensuring secure communication for all interactions.

**How to Use the Token**:
- The JWT token saved in Local Storage should be included in the *Authorization header* for all requests to secure routes. The format will be:

bash
Authorization: Bearer <encrypted_token>



### 3. *View All Carts*

- *GET* `http://localhost:3000/cart/products`

### 4. *View Cart by Partner ID*

- *GET* `http://localhost:3000/cart/:partnerId`

### 5. *Add to Cart*

- *POST* `http://localhost:3000/cart/addtocart`

**Request Body**:

 json
{
  "partnerId": <partner_id>,
  "productId": <product_id>,
  "quantity": <quantity>
}


### 6. *Update Cart*

- *PUT* `http://localhost:3000/cart/updatecart`

**Request Body**:

 json
{
  "partnerId": <partner_id>,
  "cartId": <cart_id>,
  "qty": <quantity>
}


### 7. *Delete Cart Item*

- *DELETE* `http://localhost:3000/cart/removeitem`

**Request Body**:

 json
{
  "cartId": <cart_id>
}


### 8. *View All Orders*

- *GET* `http://localhost:3000/orders/fetch`

### 9. *Fetch All Products*

- *GET* `http://localhost:3000/products/fetch?limit=1&offset=0`

**Query Parameters**:
- `limit`: Number of products to fetch.
- `offset`: Starting point for pagination.

## Securing Routes with JWT

Ensure that any route requiring authentication has the JWT token in the `Authorization` header. The format should be:

 bash
Authorization: Bearer <jwt_token>


## Additional Resources

- NestJS Documentation
- Odoo ERP 18.0 Documentation

## Contributing

We welcome contributions to this project! If you'd like to contribute, feel free to fork the repository, submit pull requests, or open issues.

### Steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
