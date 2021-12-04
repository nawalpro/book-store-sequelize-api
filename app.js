import express from 'express';
import config from './src/config/env';
import Server from './src/config/server';
import middlewares from './src/config/middlewares';
import routes from './src/modules';
import db from './src/config/database';

const api = Server(express, middlewares, routes);

(async () => {
    try {
        console.log("MODEL" ,db.sequelize.models);
        await db.associateAll(db.sequelize.models)
        await db.sequelize.sync({alter: true })
        await api.listen(config.port);
    } catch (e) {
        console.error(e);
    }
})();

