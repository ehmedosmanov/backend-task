import url from 'url'
import menuController from '../controller/menu.controller.js';

const menuRoutes = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (path === '/menu' && req.method === 'GET') {
        menuController.getMenu(req, res, query);

    } else if (path.startsWith('/menu/') && req.method === 'GET') {
        const id = parseInt(path.split('/')[2], 10);
        if (isNaN(id)) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Invalid id format' }));
        } else {
            menuController.getMenuItemById(req, res, id, query);
        }

    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
};

export default menuRoutes