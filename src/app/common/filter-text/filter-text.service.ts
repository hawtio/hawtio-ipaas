import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilterTextService {
  constructor() {
    console.log('Created an instance of FilterTextService');
  }

  filter(data: string, props: Array<string>, originalList: Observable<any>) {
    let filteredList;

    if (data && props && originalList) {
      data = data.toLowerCase();

      console.log('data: ' + JSON.stringify(data));
      console.log('props: ' + JSON.stringify(props));
      console.log('originalList: ' + JSON.stringify(originalList));

      //const filtered = originalList.filter(item => {
      filteredList = originalList.filter(item => {
        let match = false;

        for (const prop of props) {

          console.log('prop: ' + JSON.stringify(prop));

          if (item[prop].toString().toLowerCase().indexOf(data) > -1) {
            console.log('match found: ' + JSON.stringify(item[prop]));
            match = true;

            console.log('match: ' + JSON.stringify(match));
            break;
          }
        }

        return match;

      });

      //filteredList = filtered;

      /*
      filteredList = originalList.map(content => response.json().data)
        .concatMap(arr => Observable.from(arr))
        .filter(item => item.Type === 5)
        .subscribe(val => console.log(val))
        */

    } else {
      filteredList = originalList;
    }

    return filteredList;
  }
}

