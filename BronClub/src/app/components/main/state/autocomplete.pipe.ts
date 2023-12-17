import { Pipe, PipeTransform } from "@angular/core";

import { Club } from "src/app/models/club.model";

@Pipe({
    name:'autocomplete'
})
export class AutocompletePipe implements PipeTransform{
    transform(items:Club[],searchText:string):any[] {
        if(!items || !searchText){
            return items;
        }

        searchText = searchText.toLowerCase();

        return items.filter(item => item.name.toLowerCase().startsWith(searchText))
    }
}