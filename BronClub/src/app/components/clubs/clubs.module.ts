import { NgModule } from "@angular/core";
import { ClubsComponent } from "./presentation/clubs.component";

import { ClubService } from "src/app/services/club.service";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        ClubsComponent
    ],
    imports:[
        CommonModule
    ],
    providers:[
        ClubService
    ]
})
export class ClubsModule{}