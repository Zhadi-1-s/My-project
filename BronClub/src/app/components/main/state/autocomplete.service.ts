import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { ClubService } from "src/app/services/club.service";

import { Club } from "src/app/models/club.model";
import { AutocompletePipe } from "./autocomplete.pipe";

@Injectable({
    providedIn:'root'
})
export class AutocompleteService{

    clubsData:Club[];

    constructor(private clubService:ClubService, private autoCompletePipe:AutocompletePipe){
        this.clubService.getClubs().subscribe(
            data => {
                this.clubsData = data;
            }
        )
    }

    getAutocomplete(keyword:string):Observable<any[]>{
        const filteredClubs:Club[] = this.autoCompletePipe.transform(this.clubsData,keyword);
        return of(filteredClubs)
    }

}