# E-Commercify


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


This is an app for storing and accessing information in a database for e-commerce. Products, Tags, and Categories are accessed, added, and modified using RESTful API methods.



##

- Express Router is user to modularize API routes and Sequelize is used to access the MySQL database.

```
router.get('/:id', async (req, res) => {
  const productData = await Product.findByPk(req.params.id, {
    include: [{ model: Category}, {model: Tag}]
  });
  res.json(productData);
});
```
- dotenv is used to obfuscate database login data.

```
DB_NAME=ecommerce_db
DB_USER=root
DB_PW=password
```

## [Watch the demo video](https://antieatingactivist.github.io/E-Commercify/)


<img width="993" alt="Screen Shot 2022-02-07 at 7 06 53 PM" src="https://user-images.githubusercontent.com/1414728/152910543-64455abd-a58a-428b-a835-8cb878e1467e.png">


## Installation

node.js and mySQL are required to run this application. mySQL username "root" and password "password" are used. You will have to modify the credentials in index.js if you wish to use a different username or password. 

- clone the respository and enter the directory

`git clone <repository> && cd <cloned directory>`

- install dependencies

`npm install`

- edit the .env.EXAMPLE file and rename it to .env. If you are using a mySQL username other than root and a password other than 'password' you will need to change the .env file accordingly.

- add schema to mySQL database

`mysql -u root -p < ./db/schema.sql`

- seed the database

`npm run seed`

- start the application

`npm start`

## Usage

navigate to http://localhost:3001/api/products/ to view the products in the database.
you can do the same with .../api/categories and .../api/tags. Similarly you can view individual elements by accessing .../api/products/(id).

POST method can be used to create a new Tag, Product, or Category.
PUT can be used to modify an existing element.
DELETE can be used to delete an element.


## Built With

* [mySQL](https://www.mysql.com)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [node.js](https://nodejs.dev) 
* [sequelize](https://sequelize.org)



## Authors

Garrett Corbin

- [https://github.com/antieatingactivist/](https://github.com/)
- [https://www.linkedin.com/in/garrett-corbin-7a7777227/](https://www.linkedin.com/)

## License

This project is licensed under The MIT license

