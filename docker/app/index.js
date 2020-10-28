const app = require('express')();

app.get('/', (req, res) => res.send("It works !!"))
app.get('/status', (req, res) => res.sendStatus(500));


app.listen(3000, () => console.log("Server is running"))