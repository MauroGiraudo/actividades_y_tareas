import { ObjectId } from "mongodb";

export class Character {
    constructor(
    public name: string,
    public characterClass: string,
    public level: number,
    public hp: number,
    public mana: number,
    public attack: number,
    public items: string[],
    //_id?: ObjectId,
    public id = crypto.randomUUID(),
    ){}
}