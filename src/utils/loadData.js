import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const loadMenuData = async () => {
    try {
        const filePath = path.join(__dirname, '../../data/data.json');
        const rawData = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(rawData);
    } catch (error) {
        throw new Error(`Cannot load data: ${error.message}`);
    }
};


export default loadMenuData