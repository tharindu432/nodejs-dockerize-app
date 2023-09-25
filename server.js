const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => {
  res.json({message: 'Hello World- app is running on docker container'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});