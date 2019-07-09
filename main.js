const express = require('express');
const path = require('path');

const app = express();

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// port of the server or 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
