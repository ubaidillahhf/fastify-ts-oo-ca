import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT || "8080",
    db: {
        psql: {
            port: process.env.PSQL_PORT || 5432,
            host: process.env.PSQL_HOST || "localhost",
            dbName: process.env.PSQL_NAME || "fastify_ts",
            username: process.env.PSQL_USERNAME || "postgres",
            password: process.env.PSQL_PASSWORD || "password"
        }
    }
}

export default config
