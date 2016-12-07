import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component';
import {TweetService} from './tweet.service';

@Component({
    selector: 'tweet-list',
    template: `
        <div *ngFor="#tweet of tweets">
            <tweet
                [imageUrl]="tweet.imageUrl"
                [title]="tweet.title"
                [message]="tweet.message"
                [username]="tweet.username"
                [totalLikes]="tweet.totalLikes"
                [iLiked]="tweet.iLiked"
            >
            </tweet>
        </div>      
    `,
    providers: [TweetService],
    directives: [TweetComponent]
})
export class TweetsComponent{
    tweets: object[];

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}