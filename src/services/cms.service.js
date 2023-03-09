
const { collection, content, content_fields } = require('../../database/models');

// get all collections

const createCollection = async (collection_name) => {
  const newCollection = await collection.create({
    collection_name: collection_name
  });
  return newCollection;
};

const getAllCollections = async () => {
  const allCollections = await collection.findAll();
  return allCollections;
};

const createContent = async (collection_id, values) => {
  const newContent = await content.create({
    collection_id: collection_id,
    values: values
  });
  return newContent;
};

const bulkCreateContent = async (data) => {
  const values = data.map((item) => {
    const { collection_id, values } = item;
    return {
      collection_id,
      values
    };
  });

  const newContent = await content.bulkCreate(values);
  return newContent;
};

const getAllContent = async () => {
  const allContent = await content.findAll();
  return allContent;
};

const createFields = async (content_id, fields) => {
  const newFields = await content_fields.create({
    content_id: content_id,
    fields: fields
  });
  return newFields;
};

const getAllFields = async () => {
  const allFields = await content_fields.findAll();
  return allFields;
};

// delete field
const deleteField = async (id) => {
  const deletedField = await content_fields.destroy({
    where: {
      field_id: id
    }
  });
  return deletedField;
};

// api to get all content with fields and collection name



const getAllContentWithFields = async () => {
  const allContent = await content.findAll({
    include: [{
      model: content_fields,
      as: 'content_fields'
    }]
  });

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
  return(allContentWithFields);
  // res.send(allContent);
};

module.exports = {
  createCollection,
  getAllCollections,
  createContent,
  bulkCreateContent,
  getAllContent,
  createFields,
  getAllFields,
  deleteField,
  getAllContentWithFields
};