if (process.env.ENVIRONMENT !== 'PRODUCTION') {
    require('dotenv').config();
}

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors')


app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.get('/', (req, res) => res.send('Code Verification Server App'));
app.post('/code', (req,res) => {
    const code = String(req?.body?.code);
    if(code.length != 6 || code.endsWith('7')){
        return res.status(400).json({ message: "Invalid Code" });
    }else{
        return res.status(200).json({ message: "Success" });
    }
})

app.listen(port, () => console.log(`Express app running on port ${port}!`));