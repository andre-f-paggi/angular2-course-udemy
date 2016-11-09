import {Component} from 'angular2/core'

@Component({
    selector: 'rating',
    template: `
        <i 
            class="glyphicon"
            [class.glyphicon-star-empty]="!rated"
            [class.glyphicon-star]="rated"
            (click)="onClick()"
        ></i>
    `
})
export class RatingComponent{
    rated = false;
    onClick(){
        this.rated = !this.rated;
    }
}