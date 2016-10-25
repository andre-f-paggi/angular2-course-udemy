import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular</h1>
        <button (click)="onClick($event)">Submit</button>
        <button on-click="onClick()">Submit</button>
        `,
})
export class AppComponent {
    onClick($event){
        console.log($event);
    }
}