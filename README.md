
# PrimeCart

A Full stack Ecommerce website, where you can shop latest and trending products, save the items in your cart/wishlist and can checkout by making payment, by creating your account.

The Frontend part of this Web App is built with REACTJS, while the backend/api is built using STRAPI.
## Features
This website has several Features, which are developed from scratch, without using any pre-built libraries.

##### Features without any pre-built libraries
- Accordion
- Drop-down Menu
- Notification Bar
- Horizontal Image Slider
- Hover Image Slider
- Filter/Sort functionality
- User Login/SignUp
- Add/Remove to wishlist
- Add/Edit/Delete to cart
- Stripe Payment Checkout
- Device Friendly

## Demo

[See the Live Project here]( https://primecart-one.vercel.app/)

## Preview
#### Images
![PrimeCart Screenshot Home Hero](https://raw.githubusercontent.com/ritwikRkk/images-db/main/primecart/home_hero.png)

![PrimeCart Screenshot Home Featured](https://raw.githubusercontent.com/ritwikRkk/images-db/main/primecart/home_featured.png)

![PrimeCart Screenshot Home Category](https://raw.githubusercontent.com/ritwikRkk/images-db/main/primecart/home_category.png)

![PrimeCart Screenshot](https://raw.githubusercontent.com/ritwikRkk/images-db/main/primecart/footer.png)

![PrimeCart Screenshot Shop](https://raw.githubusercontent.com/ritwikRkk/images-db/main/primecart/shop.png)

![PrimeCart Screenshot sidebar cart](https://raw.githubusercontent.com/ritwikRkk/images-db/main/primecart/sidebar_cart.png)

![PrimeCart Screenshot wishlist](https://raw.githubusercontent.com/ritwikRkk/images-db/main/primecart/wishlist.png)

![PrimeCart Screenshot cart page](https://raw.githubusercontent.com/ritwikRkk/images-db/main/primecart/cart_page.png)

![PrimeCart Screenshot signup](https://raw.githubusercontent.com/ritwikRkk/images-db/main/primecart/signup.png)

#### Video

https://github.com/ritwikRkk/primecart/assets/121736908/ce3ea9bf-7255-463b-bfb8-cddd5459d1e8

## Environment Variables

To run this project, create a .env file in the root directory of the project, and copy/paste the code below:

#### Backend/server

`HOST=0.0.0.0`

`PORT=1337`

`APP_KEYS=toBeModified1,toBeModified2`

`API_TOKEN_SALT=tobemodified`

`ADMIN_JWT_SECRET=tobemodified`

`TRANSFER_TOKEN_SALT=tobemodified`

`JWT_SECRET=tobemodified`

`DATABASE_CLIENT=postgres`

To Run the strapi server on your local machine

`DATABASE_HOST=localhost`

`DATABASE_PORT=5432`

`DATABASE_NAME=YOUR DATABASE NAME`

`DATABASE_USERNAME=postgres`

`DATABASE_PASSWORD=YOUR DATABASE PASSWORD`

`DATABASE_SSL=tobemodified`


`STRIPE_KEY= STRIPE SECRET KEY`

`CLOUDINARY_NAME=tobemodified`

`CLOUDINARY_KEY=tobemodified`

`CLOUDINARY_SECRET=tobemodified`

`CLIENT_URL= YOUR FRONTEND DOMAIN`

#### Frontend/client

`REACT_APP_API_BASE_URL=YOUR BACKEND DOMAIN + /api`

`REACT_APP_API_TOKEN= STRAPI API TOKEN`

`REACT_APP_STRIPE_KEY= STRIPE PUBLISHABLE KEY`

## Installation
To Run this project locally on your computer
Follow the steps below:

STEP 1: First create a Stripe Account by following the links below:

[Stripe](https://dashboard.stripe.com/login)

[Get Stripe API Key](https://dashboard.stripe.com/test/apikeys)

STEP 2: Create a Cloudinary Account and get the keys, by following the links below:

[Get Cloudinary API Key](https://cloudinary.com/users/register_free)

STEP 3: Install postgresql, and pgAdmin by following the links below:

[Download postgresql](https://www.postgresql.org/download/)

[Download pgAdmin](https://www.pgadmin.org/download/)

[Installation video Link]( https://youtu.be/zBt0jzt-PAA?si=ZQ8b-dTnqirtFZhx)

STEP 4: Create a database(database name of your choice), and add the database name in the .env file

STEP 5: Clone the entire project

```bash
  git clone https://github.com/ritwikRkk/primecart.git
```

#### Backend/server

Go to the project directory

```bash
  cd primecart/server/
```

Install dependencies

```bash
  npm install
```
- Add all the environment variables
  
Start the server

```bash
  npm start
```
---
#### Frontend/Client

Go to the project directory

```bash
  cd primecart/client/
```

Install dependencies

```bash
  npm install
```
Add all the environment variables

Start the server

```bash
  npm run start
```
*** NOTE: Once your strapi backend api successfully runs, you only need to add the product images/data, and create an API TOKEN with full permission(add this token to Frontend .env).



## Resources
The Resources used to create this app is listed below:
#### Backend/Server
[Strapi](https://strapi.io/)

[@strapi/provider-upload-cloudinary](https://www.npmjs.com/package/@strapi/provider-upload-cloudinary)

[pg](https://www.npmjs.com/package/pg)

[stripe](https://www.npmjs.com/package/stripe)

#### Frontend/Client
[Create React App](https://create-react-app.dev/docs/getting-started)

[@emotion/react](https://www.npmjs.com/package/@emotion/react)

[@emotion/styled](https://www.npmjs.com/package/@emotion/styled)

[@fvilers/disable-react-devtools](https://www.npmjs.com/package/@fvilers/disable-react-devtools)

[@mui/icons-material](https://www.npmjs.com/package/@mui/icons-material)

[@mui/material](https://www.npmjs.com/package/@mui/material)

[@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)

[@stripe/react-stripe-js](https://www.npmjs.com/package/@stripe/react-stripe-js)

[@stripe/stripe-js](https://www.npmjs.com/package/@stripe/stripe-js)

[react-redux](https://www.npmjs.com/package/react-redux)

[react-router-dom](https://www.npmjs.com/package/react-router-dom)
## Roadmap

- Add Loading Bar & spinner.
- Add a User's order Page.
## Deployment

To deploy this project

STEP 1: Go to the project directory

STEP 2: Create a git repository, commit the changes, and push the entire backend folder and client folder to the same remote git repository.

STEP 3: Deploy Frontend/client using Vercel (Add all the environment variables)

[Frontend Deployment video tutorial](https://www.youtube.com/watch?v=IeFlfBR1lxw)

STEP 4: Deploy backend/server using Render

[Frontend Deployment video tutorial](https://www.youtube.com/watch?v=akvItcWW81g)



## Report Issues
[Report Issues](https://github.com/ritwikRkk/primecart/issues/new)
## 🔗 Connect with me
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-ritwik.vercel.app/)



## License

[MIT](https://choosealicense.com/licenses/mit/)

