const router = require('express').Router();

const verifyJwt  = require('../middlewares/jwt.middleware');

const {
  addCollection,
  fetchCollections,
  addContent,
  populateContent,
  fetchContent,
  addFields,
  fetchFields,
  removeField,
  fetchFieldValues
} = require('../controllers/cms.controller');


// get all collections
router.get('/collections', fetchCollections);
router.post('/collections', addCollection);
router.post('/content', addContent);
router.post('/content/bulk', populateContent);
router.get('/content', fetchContent);
router.post('/fields', addFields);
router.get('/fields', fetchFields);
router.delete('/fields/:id', removeField);
router.get('/content/fields', fetchFieldValues);

// router.get('/collections', verifyJwt, fetchCollections);
// router.post('/collections', verifyJwt, addCollection);
// router.post('/content', verifyJwt, addContent);
// router.post('/content/bulk', verifyJwt, populateContent);
// router.get('/content', verifyJwt, fetchContent);
// router.post('/fields', verifyJwt, addFields);
// router.get('/fields', verifyJwt, fetchFields);
// router.delete('/fields/:id', verifyJwt, removeField);
// router.get('/content/fields', verifyJwt, fetchContentWithFields);


module.exports = router;