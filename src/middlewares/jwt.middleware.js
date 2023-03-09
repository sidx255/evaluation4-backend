// middleware to verify jwt token
// const jwt = require('jsonwebtoken');
const makeRequest = require('../utils/makeRequest');
const { VERIFY_JWT } = require('../constants/apiEndPoints');
const { default: axios } = require('axios');

const verifyJwt = async (req, res, next) => {
  try {
    // get the jwt token from the head
    const token = req.headers.authorization;
    //console.log('token', token);
    // get basic user details

    // axios request to verify the token

    const { data } = await axios.get('http://localhost:5501/verify', {
      headers: {
        authorization: `${token}`,
      },
    });

    // const { data } = await makeRequest(VERIFY_JWT,{
    //   headers: {
    //     authorization: token,
    //   },
    // });
    console.log('data', data);
    //req.user = data;
    // res.status(200).json({
    //   message: 'Auth successful',
    //   data,
    // });
    next();
  } catch (err) {
    return res.status(401).json({
      message: 'Auth failed',
    });
  }
};

module.exports = verifyJwt;

