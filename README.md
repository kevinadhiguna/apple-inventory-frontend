# Apple Inventory Management System (Front-End)

## Description
This app is a simple inventory management system, created using ReactJS and Strapi. In this app, you can add new products to stocks, which can be used to monitor all available products. You are also able to see amounts of present products and details of actions conducted on every products, such as adding and removing products. The app enables you to upload images which you can make use of when saving stuff images.

## Demo
This is how this app looks :

### Home
<img src="https://raw.githubusercontent.com/kevinadhiguna/apple-inventory-frontend/master/demo/1.home.png" width="90%"></img> 

### Adding a new product
<img src="https://raw.githubusercontent.com/kevinadhiguna/apple-inventory-frontend/master/demo/2a.add-a-product.png" width="90%"></img> 
<img src="https://raw.githubusercontent.com/kevinadhiguna/apple-inventory-frontend/master/demo/2b.add-a-product.png" width="90%"></img> 
<img src="https://raw.githubusercontent.com/kevinadhiguna/apple-inventory-frontend/master/demo/2c.success-add-product.png" width="90%"></img> 

### List of all available products
<img src="https://raw.githubusercontent.com/kevinadhiguna/apple-inventory-frontend/master/demo/3a.available-products.png" width="90%"></img> <br><br>
You can click on a product's name to see its transaction history :
<img src="https://raw.githubusercontent.com/kevinadhiguna/apple-inventory-frontend/master/demo/3b.transaction-detail.png" width="90%"></img> 

### Add a stockevent or transaction
<img src="https://raw.githubusercontent.com/kevinadhiguna/apple-inventory-frontend/master/demo/4b.add-stock-event.png" width="90%"></img> <br><br>
You can either : 
- `add` a product <br>
or
- `remove` a product when it is sold.
<img src="https://raw.githubusercontent.com/kevinadhiguna/apple-inventory-frontend/master/demo/4c.input-detail.png" width="90%"></img> 
<img src="https://raw.githubusercontent.com/kevinadhiguna/apple-inventory-frontend/master/demo/4d.success-add-stockevent.png" width="90%"></img> 

### Uploading Images
This app allows you to upload images of products :
<img src="https://raw.githubusercontent.com/kevinadhiguna/apple-inventory-frontend/master/demo/5a.upload-product-image.png" width="90%"></img> 
<img src="https://raw.githubusercontent.com/kevinadhiguna/apple-inventory-frontend/master/demo/5b.upload-success.png" width="90%"></img> 

## App Repositories
This app has separated front-end and backend repositories. You are required to run both of them, to run this app. Please feel free to have a look at :
- [apple-inventory-frontend](https://github.com/kevinadhiguna/apple-inventory-frontend)
- [apple-inventory-backend](https://github.com/kevinadhiguna/apple-inventory-backend)

## How to run :
1) Open terminal and clone this project :

   `git clone https://github.com/kevinadhiguna/apple-inventory-frontend.git`

2) Change directory to this project directory in terminal :

   `npm install`

   This will install dependencies, including node_modules.

##### Once you have done step 1 and 2, you don't have to do it again when you want to run this app.

3) Open new terminal on another tab or another window, without closing current terminal. Then run [apple-inventory-backend](https://github.com/kevinadhiguna/apple-inventory-backend).

4) Return to the previous terminal and then you can run:

   `npm start`

   This will run the app in the development mode.<br />
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

   The page will reload if you make edits.<br />
   You will also see any lint errors in the console.

[![Visits Badge](https://badges.pufler.dev/visits/kevinadhiguna/apple-inventory-frontend)](https://github.com/kevinadhiguna)
