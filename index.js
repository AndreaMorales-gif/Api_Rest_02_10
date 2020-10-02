const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

const routes = require('./routes/routes');
app.use('/api/', routes);

app.use('/static', (req, res)=>{
    res.sendFile(path.join(__dirname, '../index2.html'))
})

app.listen(3000, () => {
    console.log('server started');
  });