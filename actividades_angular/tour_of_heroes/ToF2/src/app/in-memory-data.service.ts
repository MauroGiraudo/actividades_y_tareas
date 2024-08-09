import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero.js';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes = [
      {id: 12, name: 'Gon Freecss'},
      {id: 13, name: 'Killua Zoldyck'},
      {id: 14, name: 'Leorio'},
      {id: 15, name: 'Kurapika'},
      {id: 16, name: 'Kite'},
      {id: 17, name: 'Ging Freecss'},
      {id: 18, name: 'Hisoka'},
      {id: 19, name: 'Ikalgo'},
      {id: 20, name: 'Meleoron'},
      {id: 21, name: 'Netero'}
    ];
    return {heroes}
  }

  genId(heroes: Hero[]) {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
