const path = require('path');
const express = require('express');

const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`listening on port ${port}`));