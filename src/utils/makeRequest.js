const axios = require('axios').default;
const { AUTH_URL } = require('../constants/apiEndPoints');

const makeRequest = async (
  apiEndPoint=  {
    // eslint-disable-next-line no-undef
    url,
    // eslint-disable-next-line no-undef
    method,
  },
  dynamicConfig = {}
) => {
  const requestDetails = {
    baseURL: AUTH_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  const { data } = await axios(requestDetails);
  return data;
};

module.exports = makeRequest;