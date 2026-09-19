const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

app.use(morgan());

const logMiddleware = (req, res, next) => {
    // console.log('req.name:', req.name);
    req.name = 'John Doe';
    console.log("Request url:",req.url,"req method:", req.method,
        "time:",new DataTransfer().tolocaleString());
    // res.send("Hello from middleware");
    next();
} 

const apiCheckMiddleware = (req, res, next) => {
    if(req.query.API_KEY==="1234") {
        console.log("Authenticated")
        next();
    } else {
        res.send("API invalid");
    }
}

app.use(logMiddleware);
app.use(apiCheckMiddleware);

app.get('/', (req, res) => {
    console.log('request name:', req.name);
    console.log("hello,world");
    res.send('Hello, World!');
});

app.get('/data', (req, res) => {
    console.log("hello data");
    res.json({
        city:"new york",
        country:kjhgf ,
        temp:32,
        humidity:80
    })
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});