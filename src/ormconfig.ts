import { DataSource } from 'typeorm';

const config = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone',
  password: '123',
  database: 'mediumclone',
});

export default config;
