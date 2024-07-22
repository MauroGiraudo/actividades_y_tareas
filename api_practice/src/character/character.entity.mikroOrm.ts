import { Entity, Property, ManyToMany, Collection, ManyToOne, Cascade, Rel } from '@mikro-orm/core';
import { BaseEntity } from '../shared/db/baseEntity.entity.js';
import { CharacterClass } from './characterClass.entity.js';
import { Item } from './item.entity.js';

@Entity()
export class CharacterMKORM extends BaseEntity {

    @Property({nullable: false})
    name!:string
    
    @ManyToOne(() => CharacterClass, {nullable: false})
    characterClass!: Rel<CharacterClass>
    
    @Property({nullable: false})
    level!:number
    
    @Property({nullable: false})
    hp!:number
    
    @Property({nullable: false})
    mana!:number
    
    @Property({nullable: false})
    attack!:number
    
    @ManyToMany(() => Item, (item) => item.characters, {cascade: [Cascade.ALL], owner: true})
    items!: Item[]


    //_id?: ObjectId
    //public id = crypto.randomUUID(),
}