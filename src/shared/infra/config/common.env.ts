export default () => ({
    PORT: Number(process.env.PORT) || 3000,
    PG_PG: {
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        name: process.env.PG_NAME,
        host: process.env.PG_HOST,
        port: Number(process.env.PG_PORT),
    },
})
