const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});


// Start a server
app.listen(port, () => {
    console.log('\x1b[32m','---------- Server is up! ----------');
    console.log('\x1b[36m%s\x1b[0m','http://localhost:'+port);
});