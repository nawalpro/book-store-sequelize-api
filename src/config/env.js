import dotenv from 'dotenv';
dotenv.config();

const env = {
    port: process.env.PORT || 3050,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_name: process.env.DB_NAME,
    db_port: process.env.DB_PORT,
    db_host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    jwt_secret: process.env.JWT_SECRET
}

export default env;