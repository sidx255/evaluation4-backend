
const {
  createCollection,
  getAllCollections,
  createContent,
  bulkCreateContent,
  getAllContent,
  createFields,
  getAllFields,
  deleteField,
  getAllContentWithFields
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
  const { content_id, fields } = req.body;
  const newFields = await createFields(content_id, fields);
  res.send(newFields);
};

const fetchFields = async (req, res) => {
  const allFields = await getAllFields();
  res.send(allFields);
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

module.exports = {
  addCollection,
  fetchCollections,
  addContent,
  populateContent,
  fetchContent,
  addFields,
  fetchFields,
  removeField,
  fetchFieldValues
};