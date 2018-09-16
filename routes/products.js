const Product = require('../models/product'); // Importing product model schema

module.exports = (router) => {

  /* ===============================================================
     GET ALL PRODUCTS
  =============================================================== */
  router.get('/allProducts', (req, res) => {
    // Search database for all products
    Product.find({}, (err, products) => {
      // Check if error was found or not
      if (err) {
        res.json({
          success: false,
          message: err
        }); // Return error message
      } else {
        // Check if products were found in database
        if (!products) {
          res.json({
            success: false,
            message: 'No products found!'
          }); // Return error of no products found
        } else {
          res.json({
            products: products
          }); // Return success and products array
        }
      }
    }).sort({
      '_id': -1
    }); // Sort products from newest to oldest
  });

  /* ===============================================================
     GET PRODUCTS BY CATEGORY
  =============================================================== */
  router.get('/productsByCategory/:category', (req, res) => {
    // Check if id is present in parameters
    if (!req.params.category) {
      res.json({
        success: false,
        message: 'No category was provided!'
      }); // Return error message
    } else {
      // Search database for products belonging to the category provided
      Product.find({
        category: req.params.category
      }, (err, products) => {
        // Check if error was found or not
        if (err) {
          res.json({
            success: false,
            message: err
          }); // Return error message
        } else {
          // Check if products were found in database
          if (!products) {
            res.json({
              success: false,
              message: 'No products found!'
            }); // Return error of no products found
          } else {
            res.json({
              products: products
            }); // Return success and products array
          }
        }
      }).sort({
        '_id': -1
      }); // Sort products from newest to oldest
    }
  });

  /* ===============================================================
     GET SINGLE PRODUCT
  =============================================================== */
  router.get('/singleProduct/:id', (req, res) => {
    // Check if id is present in parameters
    if (!req.params.id) {
      res.json({
        success: false,
        message: 'No product ID was provided!'
      }); // Return error message
    } else {
      // Check if the product id is found in database
      Product.findOne({
        id: req.params.id
      }, (err, product) => {
        // Check if the id is a valid ID
        if (err) {
          res.json({
            success: false,
            message: 'Not a valid product id!'
          }); // Return error message
        } else {
          // Check if product was found by id
          if (!product) {
            res.json({
              success: false,
              message: 'Product not found!'
            }); // Return error message
          } else {
            res.json(product); // Return success
          }
        }
      });
    }
  });

  return router;
};
