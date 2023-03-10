
const { collection, content, content_fields } = require('../../database/models');

// get all collections

const createCollection = async (collection_name) => {
  const newCollection = await collection.create({
    collection_name: collection_name
  });
  return newCollection;
};

const changeCollectionName = async (collection_id, collection_name) => {
  const updatedCollection = await collection.update({
    collection_name: collection_name
  }, {
    where: {
      id: collection_id
    }
  });
  return updatedCollection;
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

const getAllFieldsById = async (id) => {
  const allFields = await content_fields.findAll({
    where: {
      collection_id: id
    }
  });
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

const getCollectionName = async (collection_id) => {
  const collectionName = await collection.findOne({
    where: {
      collection_id: collection_id
    }
  });
  return collectionName;
};

// update field
const updateField = async (id, fields) => {
  const updatedField = await content_fields.update({
    fields: fields
  }, {
    where: {
      field_id: id
    }
  });
  return updatedField;
};


const getAllContentWithFields = async () => {
  const allContent = await content.findAll({
    include: [{
      model: content_fields, collection,
      as: 'content_fields',
    }]
  });

  const allContentWithFields = allContent.map((content) => {
    const { content_id, collection_id, values, content_fields } = content;
    if(!content_fields) return { content_id, collection_id, data: {} };
    // const collectionName = getCollectionName(collection_id);
    const data = { ...content_fields.fields };
    const listOfKeys = Object.keys(data);
    // get company name

    const fields = {};
    listOfKeys.forEach((key) => {
      if(key in values) {
        fields[data[key]] = values[key];
      }});
    console.log(fields);

    // fields['collection_name'] = collectionName;

    
    // listOfKeys.forEach((key) => {
    //   if(data[key] = values[key];
    // });
    return {
      content_id,
      collection_id,
      // collection_name: collectionName,
      fields
    };
  });
  return(allContentWithFields);
  // res.send(allContent);
};

const getAllContentWithFieldsById = async (id) => {
  const allContent = await content.findAll({
    where: {
      collection_id: id
    },
    include: [{
      model: content_fields,
      as: 'content_fields',
    }]
  });

  const allContentWithFields = allContent.map((content) => {
    const { content_id, collection_id, values, content_fields } = content;
    if(!content_fields) return { content_id, collection_id, data: {} };
    // const collectionName = getCollectionName(collection_id);
    const data = { ...content_fields.fields };
    const listOfKeys = Object.keys(data);
    // get company name

    const fields = {};
    listOfKeys.forEach((key) => {
      if(key in values) {
        fields[data[key]] = values[key];
      }});
    console.log(fields);

    // fields['collection_name'] = collectionName;

    
    // listOfKeys.forEach((key) => {
    //   if(data[key] = values[key];
    // });
    return {
      content_id,
      collection_id,
      // collection_name: collectionName,
      fields
    };
  });
  return(allContentWithFields);
  // res.send(allContent);
};

const bulkCreateFields = async (data) => {
  const values = data.map((item) => {
    const { collection_id, fields } = item;
    return {
      collection_id: collection_id,
      fields: fields
    };
  });
  
  const newFields = await content_fields.bulkCreate(values);
  return newFields;
};

const deleteContent = async (id) => {
  const deletedContent = await content.destroy({
    where: {
      content_id: id
    }
  });
  return deletedContent;
};


// change field name for all content in collection
// const changeFieldName = async (collection_id, field_name, new_field_name) => {
//   const allContent = await content.findAll({
//     where: {
//       collection_id: collection_id
//     },
//     include: [{
//       model: content_fields, collection,
//       as: 'content_fields',
//     }]

//   });



module.exports = {
  createCollection,
  getAllCollections,
  changeCollectionName,
  createContent,
  bulkCreateContent,
  getAllContent,
  createFields,
  getAllFields,
  getAllFieldsById,
  deleteField,
  updateField,
  getAllContentWithFields,
  getAllContentWithFieldsById,
  getCollectionName,
  bulkCreateFields,
  deleteContent
};