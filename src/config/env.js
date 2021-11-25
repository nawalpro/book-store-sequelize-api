import dotenv from 'dotenv';
dotenv.config();

const env = {
    app_port: process.env.PORT || 3050,
    app_db_user: process.env.DB_USER,
    app_db_password: process.env.DB_PASSWORD,
    app_db_name: process.env.DB_NAME,
    app_db_port: process.env.DB_PORT,
    app_db_host: process.env.DB_HOST,
    app_dialect: process.env.DIALECT,
    app_jwt_secret: process.env.JWT_SECRET
}

export default env;