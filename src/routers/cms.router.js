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
  fetchFieldsById,
  removeField,
  fetchFieldValues,
  fetchFieldValuesById,
  fetchCollectionName,
  changeField,
  updateCollectionName,
  populateFields
} = require('../controllers/cms.controller');


// get all collections

// collections
router.get('/collections', fetchCollections);
router.get('/collections/:id', fetchCollectionName);
router.post('/collections', addCollection);
router.patch('/collections/:id', updateCollectionName);

// content
router.get('/content', fetchContent);
router.get('/content/fields/', fetchFieldValues);
router.get('/content/fields/:id', fetchFieldValuesById);
router.post('/content', addContent);
router.post('/content/bulk', populateContent);

// fields
router.get('/fields', fetchFields);
router.get('/field/:id', fetchFieldsById);
router.post('/fields/:id', addFields);
router.delete('/fields/:id', removeField);
router.patch('/fields/:id', changeField);
router.post('/fieldsbulk', populateFields);

// get all content



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