if (process.env.ENVIRONMENT !== 'PRODUCTION') {
    require('dotenv').config();
}

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/code', (req,res) => {
    const code = String(req?.body?.code);
    if(code.length != 6 || code.endsWith('7')){
        return res.status(403).json({ message: "Invalid Code" });
    }else{
        return res.status(200).json({ message: "Success" });
    }
})

app.listen(port, () => console.log(`Express app running on port ${port}!`));