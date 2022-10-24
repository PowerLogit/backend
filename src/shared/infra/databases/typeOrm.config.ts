import { DataSource } from 'typeorm'

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'powerlogNestAdmin',
    password: 'powerlogNestAdmin',
    database: 'powerlogNest',
    synchronize: true,
})
