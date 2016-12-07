import {Component} from 'angular2/core';
import {TweetsComponent} from './tweets.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular</h1>
        <tweet-list></tweet-list>
        `,
        directives: [TweetsComponent]
})
export class AppComponent {
    onClick($event){
        console.log($event);
    }
}