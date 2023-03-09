const router = require('express').Router();

const verifyJwt  = require('../middlewares/jwt.middleware');
const { collection, content, content_fields } = require('../../database/models');

// controllers for todo
// const {
//   addTask,
//   deleteTask,
//   updateTask,
//   getAllTasks,
//   getTaskById
// } = require('../controllers/app.controller');

// router.get('/', getAllTasks);
// router.get('/:id', getTaskById);
// router.post('/', addTask);
// router.put('/:id', updateTask);
// router.delete('/:id', deleteTask);

router.get('/verify', verifyJwt, async (req, res) => {
  res.send('Hello World!');
});

router.post('/collection', async (req, res) => {
  const { collection_name } = req.body;
  const newCollection = await collection.create({
    collection_name: collection_name
  });
  res.send(newCollection);
});

router.get('/collection', async (req, res) => {
  const allCollections = await collection.findAll();
  res.send(allCollections);
});

router.post('/content', async (req, res) => {
  const { collection_id, values } = req.body;
  const newContent = await content.create({
    collection_id: collection_id,
    values: values
  });
  res.send(newContent);
});

router.get('/content', async (req, res) => {
  const allContent = await content.findAll();
  res.send(allContent);
});

router.post('/fields', async (req, res) => {
  const { content_id, fields } = req.body;
  const newFields = await content_fields.create({
    content_id: content_id,
    fields: fields
  });
  res.send(newFields);
});

router.get('/fields', async (req, res) => {
  const allFields = await content_fields.findAll();
  res.send(allFields);
});

// delete field
router.delete('/fields/:id', async (req, res) => {
  const { id } = req.params;
  const deletedField = await content_fields.destroy({
    where: {
      field_id: id
    } 
  });
  res.send(deletedField);
});

// api to get all content with fields
router.get('/content/fields', async (req, res) => {
  const allContent = await content.findAll({
    include: [{
      model: content_fields,
      as: 'content_fields'
    }]
  });

  // combine keys of content_fields.fields and content.values


  const allContentWithFields = allContent.map((content) => {
    const { content_id, collection_id, values, content_fields } = content;
    if(!content_fields) return { content_id, collection_id, data: {} };
    const data = { ...content_fields.fields };
    const listOfKeys = Object.keys(data);
    const newJson = {};
    listOfKeys.forEach((key) => {
      if(key in values) {
        newJson[data[key]] = values[key];
      }});
    console.log(newJson);
    
    // listOfKeys.forEach((key) => {
    //   if(data[key] = values[key];
    // });
    return {
      content_id,
      collection_id,
      // values,
      newJson
    };
  });
  res.send(allContentWithFields);
  // res.send(allContent);
});




module.exports = router;