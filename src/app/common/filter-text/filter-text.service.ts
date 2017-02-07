import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilterTextService {
  constructor() {}

  filter(data: string, props: Array<string>, originalList: Array<any>) {
    let filteredList = [];

    if (data && props && originalList) {
      data = data.toLowerCase();

      originalList.filter(item => {
        let match = false;

        for (const prop of props) {

          console.log('prop: ' + JSON.stringify(prop));

          if (item[prop].toString().toLowerCase().indexOf(data) > -1) {
            console.log('match found: ' + JSON.stringify(item[prop]));
            match = true;

            filteredList.push(item);

            console.log('match: ' + JSON.stringify(match));
            console.log('item: ' + JSON.stringify(item));
            break;
          }

          console.log('filteredList: ' + JSON.stringify(filteredList));
        }

      });

    } else {
      filteredList = originalList;
    }

    return filteredList;
  }
}

