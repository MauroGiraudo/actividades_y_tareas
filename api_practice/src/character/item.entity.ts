import { Collection, Entity, ManyToMany, Property,  } from "@mikro-orm/core";
import { BaseEntity } from "../shared/db/baseEntity.entity.js";
import { CharacterMKORM } from "./character.entity.mikroOrm.js";

@Entity()
export class Item extends BaseEntity {
  @Property({nullable: false, unique: true})
  name!: string

  @Property()
  descripcion!: string

  @ManyToMany(() => CharacterMKORM, (character) => character.items)
  characters = new Collection<CharacterMKORM>(this)
}
