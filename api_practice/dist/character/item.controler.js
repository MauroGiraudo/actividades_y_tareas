import { orm } from '../shared/db/orm.js';
import { Item } from './item.entity.js';
const em = orm.em;
em.getRepository(Item);
async function findAll(req, res) {
    try {
        const items = await em.find(Item, {});
        res.status(200).json({ message: 'finded all items', data: items });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function findOne(req, res) {
    try {
        const id = req.params.id;
        const item = await em.findOneOrFail(Item, { id });
        res.status(200).json({ message: 'found item', data: item });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const item = em.create(Item, req.body);
        await em.flush();
        res.status(201).json({ message: 'item created succesfully', data: item });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function update(req, res) {
    try {
        const id = req.params.id;
        const item = em.getReference(Item, id);
        em.assign(item, req.body);
        await em.flush();
        res.status(200).json({ message: 'item updated' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function remove(req, res) {
    try {
        const id = req.params.id;
        const item = em.getReference(Item, id);
        await em.removeAndFlush(item);
        res.status(200).send({ message: 'item deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { findAll, findOne, add, update, remove };
//# sourceMappingURL=item.controler.js.map