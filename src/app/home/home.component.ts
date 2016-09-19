import {Component} from '@angular/core';

import {AppState} from '../app.service';
import {Title} from './title';

require('./home.scss');

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'home',
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [
        Title
    ],
    styles: [require('./home.scss')],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './home.html'
})
export class Home {
    // Set our default values
    localState = {value: ''};
    // TypeScript public modifiers
    constructor(public appState: AppState, public title: Title) {
        
    }
    
    ngOnInit() {
        console.log('hello `Home` component');
        // this.title.getData().subscribe(data => this.data = data);
    }
    
    submitState(value) {
        console.log('submitState', value);
        this.appState.set('value', value);
        this.localState.value = '';
    }
}
