const express = require('express');
const app = express();

// console.dir(app);

const port = 3000;
// app.use( port, (req, res) => {
//     console.log('Received request from user');
//     res.send({ 
//         message: 'Hello, World!',
//         status: 200
//     });
//   });
app.get( "/", (req, res) => {
    res.send({ 
        message: 'Hello, World!',
        status: 200
    });
  });
app.get( "/nothing", (req, res) => {
    res.send({ 
        message: 'nothing here!',
        status: 200
    });
  });
app.get( "*", (req, res) => {
    res.send({ 
        message: 'You are on a worng path!',
        status: 200
    });
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
