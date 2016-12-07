import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object" src="{{imageUrl}}" alt="tweet picture">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{title}} <small>{{username}}</small></h4>
                <p>{{message}}</p>
                <like [totalLikes]="totalLikes" [isHighlighted]="iLiked"></like>
            </div>
        </div>        
    `,
    styles: [
        `
            .media-object{
                border-radius: 10px;
            }
        `
    ],
    directives: [LikeComponent]
})
export class TweetComponent{
    @Input() imageUrl: string;
    @Input() title: string;
    @Input() message: string;
    @Input() username: string;
    @Input() totalLikes: string;
    @Input() iLiked: string;
}