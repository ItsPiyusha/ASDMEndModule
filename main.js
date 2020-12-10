let express = require('express');
let app = express();
let bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

let logger = (req, resp, next)=>{
    console.log(req.url);
    console.log(req.method);

    next();
}

let sayhello = (req, resp) => {
    resp.send("This is 1179_Piyusha Pawar");
}

let saygreetings = (req, resp) => {
    resp.send("GOOD EVENING!!!!");
}

app.use(logger);
app.use('/greetings', saygreetings);
app.use('/hello', sayhello);

app.listen(8567, () => {
    console.log('Server is started on 8567')
})
