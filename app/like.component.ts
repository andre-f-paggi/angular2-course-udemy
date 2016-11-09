import {Component, Input} from 'angular2/core'

@Component(
    {
        selector: 'like',
        template:
            `
            <i
                class="glyphicon glyphicon-heart"
                [class.highlighted]="isHighlighted"
                (click)="onClick()"
            >
            </i>
            <span>{{ totalLikes }}</span>
            `,
        styles:
        [`
            .glyphicon-heart{
                color: #ccc;
                cursor:pointer
            }

            .highlighted{
                color: deeppink;
            }
        `]
    }
)
export class LikeComponent{
    @Input() totalLikes = 0;
    @Input() isHighlighted = false;

    onClick(){
        this.isHighlighted = !this.isHighlighted;
        this.totalLikes += (this.isHighlighted ? 1 : -1);
    }

}