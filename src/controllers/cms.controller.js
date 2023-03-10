
const {
  createCollection,
  getAllCollections,
  createContent,
  bulkCreateContent,
  getAllContent,
  createFields,
  getAllFields,
  getAllFieldsById,
  deleteField,
  getAllContentWithFields,
  getAllContentWithFieldsById,
  getCollectionName,
  updateField,
  changeCollectionName,
  bulkCreateFields
} = require('../services/cms.service');

// get all collections

const addCollection = async (req, res) => {
  const { collection_name } = req.body;
  const newCollection = await createCollection(collection_name);
  res.send(newCollection);
};

const fetchCollections = async (req, res) => {
  const allCollections = await getAllCollections();
  res.send(allCollections);
};

const addContent = async (req, res) => {
  const { collection_id, values } = req.body;
  const newContent = await createContent(collection_id, values);
  res.send(newContent);
};

const populateContent = async (req, res) => {
  const data = req.body;
  const newContent = await bulkCreateContent(data);
  res.send(newContent);
};

const fetchContent = async (req, res) => {
  const allContent = await getAllContent();
  res.send(allContent);
};

const addFields = async (req, res) => {
  // take params
  const { id } = req.params;
  const { fields } = req.body;
  const newFields = await createFields(id, fields);
  res.json(newFields);
};

const fetchFields = async (req, res) => {
  const allFields = await getAllFields();
  res.json(allFields);
};

const fetchFieldsById = async (req, res) => {
  const { id } = req.params;
  const allFields = await getAllFieldsById(id);
  res.json(allFields);
};

const removeField = async (req, res) => {
  const { id } = req.params;
  const deletedField = await deleteField(id);
  res.send(deletedField);
};

const fetchFieldValues = async (req, res) => {
  const allContentWithFields = await getAllContentWithFields();
  res.send(allContentWithFields);
};

const fetchFieldValuesById = async (req, res) => {
  const { id } = req.params;
  if(isNaN(id)) return res.status(400).send({ message: 'Invalid ID' });
  const allContentWithFields = await getAllContentWithFieldsById(id);
  res.send(allContentWithFields);
};

const fetchCollectionName = async (req, res) => {
  const allCollectionName = await getCollectionName(req.params.id);
  res.send(allCollectionName);
};

const changeField = async (req, res) => {
  const { id } = req.params;
  const { fields } = req.body;
  const updatedField = await updateField(id, fields);
  res.send(updatedField);
};

const updateCollectionName = async (req, res) => {
  const { id } = req.params;
  const { collection_name } = req.body;
  const updatedCollection = await changeCollectionName(id, collection_name);
  res.send(updatedCollection);
};

const populateFields = async (req, res) => {
  const data = req.body;
  const newFields = await bulkCreateFields(data);
  res.send(newFields);
};


module.exports = {
  addCollection,
  fetchCollections,
  addContent,
  populateContent,
  fetchContent,
  addFields,
  fetchFields,
  removeField,
  fetchFieldValues,
  fetchFieldsById,
  fetchFieldValuesById,
  fetchCollectionName,
  changeField,
  updateCollectionName,
  populateFields
};