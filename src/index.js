const express = require('express');
const cors = require('cors');
const {
    ServerConfig,
    dbConnect
} = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: ServerConfig.CORS_ORIGIN,
    credentials: true
}));


app.listen(ServerConfig.PORT, () => {
    dbConnect();
    console.log(`API Gateway started on ${ServerConfig.PORT}!`);
});