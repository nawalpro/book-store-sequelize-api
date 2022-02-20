import express from 'express';
import routes from './modules';
import middlewares from './middlewares';
import Server from './config/server';
import config from './config/env';
import db from './config/database';

const http = express();
const application  = new Server(http, routes, middlewares);
console.log('====================================');
console.log(application);
console.log('====================================');
(async () => {
    try {
        console.log("MODEL" ,db.sequelize.models);
        await db.associateAll(db.sequelize.models)
        await db.sequelize.sync({alter: true})
        await application.listen(config.port);
    } catch (e) {
        console.error(e);
    }
})();

