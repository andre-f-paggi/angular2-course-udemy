import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {RatingComponent} from './rating.component';
import {LikeComponent} from './like.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular</h1>
        <rating></rating>
        <like [totalLikes]="tweet.totalLikes" [isHighlighted]="tweet.isHighlighted"></like>
        `,
        directives: [LikeComponent]
})
export class AppComponent {
    onClick($event){
        console.log($event);
    }

    tweet = {
        totalLikes: 10,
        isHighlighted: false
    }
}