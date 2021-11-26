import express from 'express';
import config from './src/config/env';
import Server from './src/config/server';
import middlewares from './src/config/middlewares';
import routes from './src/modules';
import db from './src/config/database';

const http = express();
const api = new Server(http);
api.middlewares(middlewares);
api.routes(routes);

(async () => {
    try {
        console.log("MODEL" ,db.sequelize.models);
        await db.associateAll(db.sequelize.models)
        await api.start(config.port);
        await db.sequelize.sync({alter: true, force: true })
    } catch (e) {
        console.error(e);
    }
})();

