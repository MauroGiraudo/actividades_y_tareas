var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Property, ManyToMany, ManyToOne, Cascade } from '@mikro-orm/core';
import { BaseEntity } from '../shared/db/baseEntity.entity.js';
import { CharacterClass } from './characterClass.entity.js';
import { Item } from './item.entity.js';
export let CharacterMKORM = class CharacterMKORM extends BaseEntity {
};
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], CharacterMKORM.prototype, "name", void 0);
__decorate([
    ManyToOne(() => CharacterClass, { nullable: false }),
    __metadata("design:type", Object)
], CharacterMKORM.prototype, "characterClass", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", Number)
], CharacterMKORM.prototype, "level", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", Number)
], CharacterMKORM.prototype, "hp", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", Number)
], CharacterMKORM.prototype, "mana", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", Number)
], CharacterMKORM.prototype, "attack", void 0);
__decorate([
    ManyToMany(() => Item, (item) => item.characters, { cascade: [Cascade.ALL], owner: true }),
    __metadata("design:type", Array)
], CharacterMKORM.prototype, "items", void 0);
CharacterMKORM = __decorate([
    Entity()
], CharacterMKORM);
//# sourceMappingURL=character.entity.mikroOrm.js.map