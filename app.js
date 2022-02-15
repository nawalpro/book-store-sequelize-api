import express from 'express';
import Server from './src/config/server';
import config from './src/config/env';
import middlewares from './src/middlewares';
import routes from './src/modules';
import db from './src/config/database';

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

