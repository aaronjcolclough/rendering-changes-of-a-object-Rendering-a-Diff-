import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isObject } from 'rxjs/internal-compatibility';
import { Diff, EntityChanges, User } from '../models';

@Injectable()
export class DataService {
  private user = new BehaviorSubject<User>(null);
  private users = new BehaviorSubject<User[]>(null);
  private diff = new BehaviorSubject<Diff>(null);
  private changes = new BehaviorSubject<EntityChanges[]>(null);

  user$ = this.user.asObservable();
  users$ = this.users.asObservable();
  diff$ = this.diff.asObservable();
  changes$ = this.changes.asObservable();

  changesArray: EntityChanges[] = [];

  simulateGetDiff = () => {
    var userDiff = {
      id: 1,
      previous: JSON.stringify(this.previous),
      proposed: JSON.stringify(this.proposed)
    };

    this.diff.next(userDiff);
  };

  setDiffChanges = () => this.changes.next(this.changesArray);

  checkChanges = (prevData: any, propData: any, nav: string = null) => {
    let keys: string[] = [];

    for (const [key, value] of Object.entries(prevData)) {
      if (!isObject(value)) {
        if (value !== propData[key]) keys.push(key);
      } else this.checkChanges(value, propData[key], key);
    }
    if (keys.length > 0)
      this.changesArray.push({ navPropKey: nav, changedKeys: keys });
  };

  private previous: User = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: { lat: '-37.3159', lng: '81.1496' }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  };

  private proposed: User = {
    id: 1,
    name: 'Leanne Graham',
    username: 'LG420',
    email: 'Sincere@april.biz',
    address: {
      street: 'Cragburn Pl',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: { lat: '-37.3159', lng: '81.1496' }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'this company sucks',
      bs: 'harness real-time e-markets'
    }
  };
}
