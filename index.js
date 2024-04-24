const express = require('express');
const app = express();

console.dir(app);

let port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use( (req, res) => {
    console.log('Received request from user');
    res.send({ 
        message: 'Hello, World!',
        status: 200
    });
  });