import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 App</h1>
        <zippy title="Title of the zippy component">
            <div>This is the model content</div>
        </zippy>
        `,
        directives: [ZippyComponent]
})
export class AppComponent {
    onClick($event){
        console.log($event);
    }
}