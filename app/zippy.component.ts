import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading" (click)="toggleCollapse()">
                <h4 class="panel-title">
                    <a>{{ title }}</a>
                    <span class="glyphicon pull-right" [ngClass]="collapsed ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down' "></span>
                </h4>
            </div>
            <div class="panel-collapse" *ngIf="!collapsed">
                <div class="panel-body">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `
})
export class ZippyComponent{
    @Input() title = "Title";

    collapsed = false;

    toggleCollapse(){
        this.collapsed = !this.collapsed;
    }
}