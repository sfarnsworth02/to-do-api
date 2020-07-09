const express = require('express');
const app = express();



app.listen(5050, (err) =>
{
    if(err)
    {
        console.log('Error listening to port 5050: ', err);
    }
    console.log('Server listening on port 5050');
});