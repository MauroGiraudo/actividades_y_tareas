import { Character } from "./character.entity.js";
import { Repository } from "../shared/repository.js";

const characters = [
  new Character(
    'Jingliu',
    'Destruction',
    80,
    2800,
    130,
    3030,
    ['Ice Sword', 'Blindfold'],
    "b780c4c668c2"
  ),
  new Character(
    'Acheron',
    'Nihility',
    80,
    3157,
    9,
    3814,
    ['Electric Sword', 'Crimson Blossom'],
    "8f4473bf6871")
]

export class CharacterRepository implements Repository<Character> {

  public findAll(): Character[] | undefined {
    return characters
  }

  public findOne(item: { codigo: string }): Character | undefined {
    return characters.find((char) => char.id === item.codigo)
  }

  public add(item: Character): Character | undefined {
   characters.push(item)
   return item
  }

  public update(item: Character): Character | undefined {
    const charIndex = characters.findIndex((char) => char.id === item.id)
    if (charIndex !== -1) {
      characters[charIndex] = {...characters[charIndex], ...item}
    }
    return characters[charIndex]
  }

  public delete(item: { codigo: string }): Character | undefined {
    const charIndex = characters.findIndex((char) => char.id === item.codigo)
    const deletedChar = characters[charIndex]
    characters.splice(charIndex, 1)
    return deletedChar
  }
}