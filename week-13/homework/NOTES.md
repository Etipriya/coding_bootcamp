## Start
- To .env
  - Add db name
  - Add username
  - add password

- Sequelize your server
- Setup DB in workbench
- Complete models
- Run `npm run seed`
- Complete route handlers
- Test your api using Postman


## App
- App starts
- DB is synced


## Categories

GET - /api/categories
GET - /api/categories/1
POST - /api/categories
  {
    "category_name": "Foo"
  }
PUT - /api/categories/1
  {
    "category_name": "Foo"
  }
DELETE - /api/categories/1

## Products

GET - /api/products
GET - /api/products/1
POST - /api/products
  {
    "product_name": "Foo"
  }
PUT - /api/products/1
  {
    "product_name": "Foo"
  }
DELETE - /api/products/1

## Tags

GET - /api/tags
GET - /api/tags/1
POST - /api/tags
  {
    "tag_name": "Foo"
  }
PUT - /api/tags/1
  {
    "tag_name": "Foo"
  }
DELETE - /api/tags/1

## THINGS TO CONSIDER 

- All routes to have error handling
- All routes to have some form of logging
- All routes to return a response
- All routes to have some form of validation
- Status codes (200, 400, 404, 500)
- Maybe replace promises with async/await

## MODELS

Product -> Category

Tag

ProductTag -> Product
ProductTag -> Tag