import discountUtil from '../utils/discountUtil.js';
import loadMenuData from '../utils/loadData.js';

const menuService = {
    getMenu: async (date) => {
        const menu = await loadMenuData()

        if (date) {
            menu.data.categories.forEach((category) => {
                category.menuItems = category.menuItems.map((item) => discountUtil(item, date));
            });
        }

        return menu;
    },
    getMenuItemById: async (id, date) => {
        const menu = await loadMenuData();

        let menuItem = null;

        menu.data.categories.some((category) => {
            menuItem = category.menuItems.find((item) => item.id === id);
            return !!menuItem;
        });

        if (!menuItem) return null;

        return date ? discountUtil(menuItem, date) : menuItem;
    }
}


export default menuService
