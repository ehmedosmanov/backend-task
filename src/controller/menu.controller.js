import menuService from "../services/menu.service.js";


const menuController = {
    getMenu: async (req, res, query) => {
        try {
            const date = query.date;
            const menu = await menuService.getMenu(date);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(menu));
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Error', error: error.message }));
        }
    },
    getMenuItemById: async (req, res, id, query) => {
        try {
            const date = query.date;
            const menuItem = await menuService.getMenuItemById(id, date);

            if (!menuItem) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Menu item not found' }));
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(menuItem));
            }

        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Error', error: error.message }));
        }
    }
}



export default menuController
