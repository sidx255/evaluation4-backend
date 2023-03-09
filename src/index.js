
const express = require('express');
const router = require('./routers/cms.router.js');


const app = express();
app.use(express.json());

app.use('/', router);


app.listen(4000, () => {
  console.log('Server live at http://localhost:4000');
});