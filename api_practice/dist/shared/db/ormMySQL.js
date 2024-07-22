import { MikroORM } from "@mikro-orm/core";
import { SqlHighlighter } from "@mikro-orm/sql-highlighter";
export const orm = await MikroORM.init({
    entities: ["./dist/**/*.entity.js"],
    entitiesTs: ["./src/**/*.entity.ts"],
    dbName: "heroclash4geeks",
    type: "mysql",
    clientUrl: "mysql://root:root@localhost:3306/heroclash4geeks",
    highlighter: new SqlHighlighter(),
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
    await generator.dropSchema();
    await generator.createSchema();
    */
    await generator.updateSchema();
};
//# sourceMappingURL=ormMySQL.js.map