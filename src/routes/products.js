// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = express.Router('../middlewares/uploadProductsFiles');
const createForm = require('../validator/createForm');


// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create);  //Para mostrar el formulario
router.post('/',  createForm , productsController.store);  //Para crear el formulario



/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
