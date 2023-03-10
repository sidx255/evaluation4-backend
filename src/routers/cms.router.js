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
  populateFields,
  removeContent
} = require('../controllers/cms.controller');


// get all collections

// collections
router.get('/collections', verifyJwt, fetchCollections);
router.get('/collections/:id', verifyJwt, fetchCollectionName);
router.post('/collections', verifyJwt, addCollection);
router.patch('/collections/:id', verifyJwt, updateCollectionName);

// content
router.get('/content', verifyJwt, fetchContent);
router.get('/content/fields/', verifyJwt, fetchFieldValues);
router.get('/content/fields/:id', verifyJwt, fetchFieldValuesById);
router.delete('/content/:id', verifyJwt, removeContent);
router.post('/content', verifyJwt, addContent);
router.post('/content/bulk', verifyJwt, populateContent);

// fields
router.get('/fields', verifyJwt, fetchFields);
router.get('/field/:id', verifyJwt, fetchFieldsById);
router.post('/fields/:id', verifyJwt, addFields);
router.delete('/fields/:id', verifyJwt, removeField);
router.patch('/fields/:id', verifyJwt, changeField);
router.post('/fieldsbulk', verifyJwt, populateFields);

// get all content



// router.get('/collections', verifyJwt, verifyJwt, verifyJwt, fetchCollections);
// router.post('/collections', verifyJwt, verifyJwt, verifyJwt, addCollection);
// router.post('/content', verifyJwt, verifyJwt, verifyJwt, addContent);
// router.post('/content/bulk', verifyJwt, verifyJwt, verifyJwt, populateContent);
// router.get('/content', verifyJwt, verifyJwt, verifyJwt, fetchContent);
// router.post('/fields', verifyJwt, verifyJwt, verifyJwt, addFields);
// router.get('/fields', verifyJwt, verifyJwt, verifyJwt, fetchFields);
// router.delete('/fields/:id', verifyJwt, verifyJwt, verifyJwt, removeField);
// router.get('/content/fields', verifyJwt, verifyJwt, verifyJwt, fetchContentWithFields);


module.exports = router;