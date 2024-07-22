import { MikroORM } from "@mikro-orm/core";
import { MongoHighlighter } from "@mikro-orm/mongo-highlighter";
export const orm = await MikroORM.init({
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    dbName: 'heroclash4geeks',
    type: 'mongo',
    clientUrl: 'mongodb://localhost:27017',
    highlighter: new MongoHighlighter(),
    debug: true,
    schemaGenerator: {
        disableForeignKeys: true,
        createForeignKeyConstraints: true,
        ignoreSchema: [],
    }
});
export const syncSchema = async () => {
    const generator = orm.getSchemaGenerator();
    /*
    await generator.dropSchema()
    await generator.createSchema()
    */
    await generator.updateSchema();
};
//# sourceMappingURL=ormMongo.js.map