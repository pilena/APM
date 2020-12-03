import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component( {
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
}) 

export class StarComponent implements OnChanges{
    @Input() rating : number;
    //input decorator exposes a nested container proprety to container component (child to parent) 
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 75/5;
    }

    onClick() : void {
        this.ratingClicked.emit(`Clicked ${this.rating}`);
    }
}