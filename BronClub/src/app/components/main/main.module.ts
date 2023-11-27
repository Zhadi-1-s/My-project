import { NgModule } from "@angular/core";
import { MainComponent } from "./presentation/main.component";

import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
    declarations:[
        MainComponent
    ],
    imports:[
        AppRoutingModule
    ],
    providers:[
        Navigator
    ]
})
export class MainModule{}