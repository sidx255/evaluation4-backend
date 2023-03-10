
const express = require('express');
const router = require('./routers/cms.router.js');

const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

app.use('/', router);



app.listen(4000, () => {
  console.log('Server live at http://localhost:4000');
});