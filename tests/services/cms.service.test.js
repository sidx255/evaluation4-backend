
// Import your functions
const { createCollection, changeCollectionName, getAllCollections, createContent, getAllContent , createFields} = require('../../src/services/cms.service');

// Import your models
const { collection, content, content_fields } = require('../../database/models');

// Mock your models
jest.mock('../../database/models');

describe('Testing your functions', () => {
  // Use beforeEach to reset the mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test createCollection
  it('should create a collection with the given name', async () => {
    // Arrange
    const collection_name = 'test';
    const newCollection = { id: 1, collection_name: 'test' };
    // Spy on collection.create and mock its implementation
    const spy = jest.spyOn(collection, 'create').mockResolvedValue(newCollection);
    // Act
    const result = await createCollection(collection_name);
    // Assert
    expect(spy).toHaveBeenCalledWith({ collection_name: collection_name });
    expect(result).toEqual(newCollection);
  });

  // Test changeCollectionName
  it('should update the collection name with the given id', async () => {
    // Arrange
    const collection_id = 1;
    const collection_name = 'new test';
    const updatedCollection = { id: 1, collection_name: 'new test' };
    // Spy on collection.update and mock its implementation
    const spy = jest.spyOn(collection, 'update').mockResolvedValue(updatedCollection);
    // Act
    const result = await changeCollectionName(collection_id, collection_name);
    // Assert
    expect(spy).toHaveBeenCalledWith({ collection_name: collection_name }, { where: { id: collection_id } });
    expect(result).toEqual(updatedCollection);
  });

  // Test getAllCollections
  it('should return all collections', async () => {
    // Arrange 
    const allCollections = [{ id: 1 ,collection_name:'test'}, {id:2,collection_name:'another test'}];
    // Spy on collections.findAll and mock its implementation 
    const spy=jest.spyOn(collection,'findAll').mockResolvedValue(allCollections); 
    // Act 
    const result=await getAllCollections(); 
    // Assert 
    expect(spy).toHaveBeenCalled(); 
    expect(result).toEqual(allCollections);
  }); 

  // Test createContent 
  it('should create content with the given values for the given collection id', async () => { 
    // Arrange 
    const collection_id=1; 
    const values={title:'test content',body:'some text'}; 
    const newContent={id:1,collection_id:1,values:{title:'test content',body:'some text'}}; 
    // Spy on content.create and mock its implementation 
    const spy=jest.spyOn(content,'create').mockResolvedValue(newContent); 
    // Act
    const result=await createContent(collection_id,values);
    // Assert
    expect(spy).toHaveBeenCalledWith({collection_id:collection_id,values:values});
    expect(result).toEqual(newContent);
  });
  // Test getAllContent
  it('should return all content', async () => {
    // Arrange
    const allContent = [{ id: 1 ,collection_id:1,title:'test content',body:'some text'}, {id:2,collection_id:2,title:'another test content',body:'some more text'}];
    // Spy on content.findAll and mock its implementation 
    const spy=jest.spyOn(content,'findAll').mockResolvedValue(allContent); 
    // Act 
    const result=await getAllContent(); 
    // Assert 
    expect(spy).toHaveBeenCalled(); 
    expect(result).toEqual(allContent); 
  });

  // Test createFields
  it('should create fields with the given values for the given content id', async () => {
    // Arrange 
    const content_id=1; 
    const fields={title:'test field',type:'text'}; 
    const newFields={id:1,content_id:1,fields:{title:'test field',type:'text'}}; 
    // Spy on content_fields.create and mock its implementation 
    const spy=jest.spyOn(content_fields,'create').mockResolvedValue(newFields); 


    // Act
    const result=await createFields(content_id,fields);
    // Assert
    expect(spy).toHaveBeenCalledWith({content_id:content_id,fields:fields});
    expect(result).toEqual(newFields);

  });

});