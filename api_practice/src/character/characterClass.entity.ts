import { Cascade, Collection, Entity, OneToMany, Property } from '@mikro-orm/core'
import { Character } from "./character.entity.js"
import { BaseEntity } from '../shared/db/baseEntity.entity.js'

@Entity()
export class CharacterClass extends BaseEntity {

  @Property({nullable: false, unique: true})
  name!: string

  @Property()
  descripcion!: string

  @OneToMany(() => Character, character => character.characterClass, {cascade: [Cascade.ALL]})
  characters = new Collection<Character>(this)
}