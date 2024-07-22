import { pool } from "../shared/db/conn.mysql.js";
//const characters = db.collection<Character>('characters')
//QUITAR EL COMENTARIO PARA UTILIZAR MONGODB SIN MIKRO-ORM
export class CharacterRepository {
    async findAll() {
        //MongoDB
        /*return await characters.find().toArray()*/
        //MySQL 
        const [characters] = await pool.query('select * from characters');
        for (const character of characters) {
            const [items] = await pool.query('select itemName from characterItems where characterId = ?', [character.id]);
            character.items = items.map((item) => item.itemName);
        }
        return characters;
    }
    async findOne(item) {
        //MongoDB
        /*const _id = new ObjectId(item.codigo)
        return (await characters.findOne({_id})) || undefined*/
        //MySQL
        const id = Number.parseInt(item.codigo);
        const [characters] = await pool.query('select * from characters where id = ?', [id]);
        if (characters.length === 0) {
            return undefined;
        }
        const character = characters[0];
        const [items] = await pool.query('select itemName from characterItems where characterId = ?', [character.id]);
        character.items = items.map((item) => item.itemName);
        return character;
    }
    async add(characterInput) {
        //MongoDB
        /*characterInput._id = (await characters.insertOne(characterInput)).insertedId
        return characterInput*/
        //MySQL
        const { id, items, ...characterRow } = characterInput;
        const [resultado] = await pool.query('insert into characters set ?', [characterRow]);
        characterInput.id = resultado.insertId;
        for (const item of items) {
            await pool.query('insert into characterItems set ?', { characterId: characterInput.id, ItemName: item });
        }
        return characterInput;
    }
    async update(codigo, characterInput) {
        //MongoDB
        /*const _id = new ObjectId(codigo)
        return (await characters.findOneAndUpdate({_id}, {$set: characterInput}, {returnDocument:'after'})) || undefined*/
        //MySQL
        const characterId = Number.parseInt(codigo);
        const { items, ...characterRow } = characterInput;
        await pool.query('update characters set ? where id = ?', [characterRow, characterId]);
        await pool.query('delete from characterItems where characterId = ?', [characterId]);
        if (items?.length > 0) {
            for (const itemName of items) {
                await pool.query('insert into characterItems set ?', { characterId, itemName });
            }
        }
        //return await this.findOne({codigo}) //NO SÉ DE DÓNDE SAQUÉ ESTO, PERO LO DEJO POR LAS DUDAS...
        return await characterInput;
    }
    async delete(item) {
        //MongoDB
        /*const _id = new ObjectId(item.codigo)
        return (await characters.findOneAndDelete({_id})) || undefined*/
        //MySQL
        try {
            const characterToDelete = await this.findOne(item);
            const characterId = Number.parseInt(item.codigo);
            await pool.query('delete from characterItems where characterId = ?', characterId);
            await pool.query('delete from characters where id = ?', characterId);
            return characterToDelete;
        }
        catch (error) {
            throw new Error('unable to delete character');
        }
    }
}
//# sourceMappingURL=character.repository.js.map