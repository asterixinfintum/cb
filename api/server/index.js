require("dotenv").config();
import "regenerator-runtime/runtime.js";
import express from "express";
import http from "http";
import cors from 'cors';
import bodyParser from 'body-parser';

import mongoose from 'mongoose';

import messageroute from './messageroute';

const app = express();

const allowlist = [/*'http://localhost:3000',*/'https://harfinlaw.com', 'https://www.harfinlaw.com'];

const corsOptionsDelegate = (req, callback) => {
  let corsOptions;

  let isDomainAllowed = allowlist.indexOf(req.header('Origin')) !== -1;

  if (isDomainAllowed) {
      corsOptions = { origin: true }
  } else {
      corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}

app.use(cors(corsOptionsDelegate));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(messageroute);

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

  mongoose.connect('mongodb://db:27017/lawverdb', {
  //mongodb://db:27017/lawverdb =====> production
  //mongodb://127.0.0.1:27017/lawverdb ===> development

    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}).then(() => {
    console.log('connected to database');

    server.listen(PORT, async (error) => {
      if (error) {
        return error;
      }
    
      return console.log(`server started on port here now ${PORT}`);
    });
});
