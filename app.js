import express from 'express';
import env from './src/config/env';
import middlewares from './src/config/middlewares';
import Server from './src/config/server';

const http = express();
const server = new Server (http);
server.middlewares(middlewares);

server.start(env.app_port);
// const configSequelize =  require('./src/config')
//  require('dotenv').config()
// // const sequelize = require('sequelize')
// const express = require ('express')
// const app = express()

// app.listen(process.env.PORT, () => {
//     console.log(`server started` + process.env.PORT);
// });