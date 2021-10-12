import dotenv from 'dotenv';
dotenv.config();
const config={
    env: process.env.NODE_ENV || 'developenement',
    port: process.env.PORT || 9000,
    mongo_uri: process.env.MONGO_URI || process.env.MONGO_HOST || 'mongodb://'+(process.env.IP || 'localhost')+':'+(process.env.MONGO_PORT || '27017')+ '/datingapp'
}

export default config;