import { NgModule } from "@angular/core";
import { MainComponent } from "./presentation/main.component";

import { AppRoutingModule } from "src/app/app-routing.module";
import { AutocompleteLibModule } from "angular-ng-autocomplete";

import { ReactiveFormsModule } from "@angular/forms";
import { AutocompleteService } from "./state/autocomplete.service";
import { AutocompletePipe } from "./state/autocomplete.pipe";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        MainComponent
    ],
    imports:[
        AppRoutingModule,
        AutocompleteLibModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers:[
        Navigator,
        AutocompleteService,
        AutocompletePipe
    ]
})
export class MainModule{}