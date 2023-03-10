
// Import your functions
const { addCollection, fetchCollections, addContent, populateContent, fetchContent, addFields, fetchFields, fetchFieldsById, removeField, fetchFieldValues, fetchFieldValuesById } = require('../../src/controllers/cms.controller');

// Import your models
const { content_fields } = require('../../database/models');

// Mock your models
jest.mock('../../database/models');

describe('Testing your functions', () => {
  // Use beforeEach to reset the mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test addCollection
  it('should create a collection with the given name and send it as a response', async () => {
    // Arrange 
    const req = { body: { collection_name: 'test collection' } };
    const res = { send: jest.fn() };
    const newCollection = { id: 1 ,collection_name: 'test collection' };
    // Spy on createCollection and stub its return value 
    const spy = jest.spyOn(content_fields,'createCollection').mockReturnValue(newCollection); 
    // Act 
    await addCollection(req,res); 
    // Assert 
    expect(spy).toHaveBeenCalledWith(req.body.collection_name); 
    expect(res.send).toHaveBeenCalledWith(newCollection); 
  });

  // Test fetchCollections
  it('should fetch all collections and send them as a response', async () => {
    // Arrange 
    const req = {};
    const res = { send: jest.fn() };
    const allCollections = [{ id: 1 ,collection_name:'test'}, {id:2,collection_name:'another test'}];
    // Spy on getAllCollections and stub its return value 
    const spy=jest.spyOn(content_fields,'getAllCollections').mockReturnValue(allCollections); 
    // Act 
    await fetchCollections(req,res); 
    // Assert 
    expect(spy).toHaveBeenCalled(); 
    expect(res.send).toHaveBeenCalledWith(allCollections);
  });

  // Test addContent
  it('should create content with the given values for the given collection id and send it as a response', async () => {
    // Arrange 
    const req = { body: { collection_id: 1, title: 'test content', body: 'some text' } };
    const res = { send: jest.fn() };
    const newContent = { id: 1, collection_id: 1, title: 'test content', body: 'some text' };
    // Spy on createContent and stub its return value 
    const spy=jest.spyOn(content_fields,'createContent').mockReturnValue(newContent); 
    // Act 
    await addContent(req,res); 
    // Assert 
    expect(spy).toHaveBeenCalledWith(req.body.collection_id,req.body); 
    expect(res.send).toHaveBeenCalledWith(newContent);
  });

  // Test populateContent
  it('should populate content with the given values for the given content id and send it as a response', async () => {
    // Arrange 
    const req = { body: { content_id: 1, title: 'test content', body: 'some text' } };
    const res = { send: jest.fn() };
    const populatedContent = { id: 1, collection_id: 1, title: 'test content', body: 'some text' };
    // Spy on populateContent and stub its return value 
    const spy=jest.spyOn(content_fields,'populateContent').mockReturnValue(populatedContent); 
    // Act 
    await populateContent(req,res); 
    // Assert 
    expect(spy).toHaveBeenCalledWith(req.body.content_id,req.body); 
    expect(res.send).toHaveBeenCalledWith(populatedContent);
  });

});