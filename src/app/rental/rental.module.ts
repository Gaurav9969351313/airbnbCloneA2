import { NgModule } from "@angular/core";

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';

@NgModule({
    declarations:[
        RentalComponent,
        RentalListComponent,
        RentalListItemComponent
    ],
    imports:[],
    providers:[]
})

export class RentalModule { }