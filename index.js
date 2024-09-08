import http from 'http'
import menuRoutes from './src/routes/menu.routes.js';
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    menuRoutes(req, res);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
