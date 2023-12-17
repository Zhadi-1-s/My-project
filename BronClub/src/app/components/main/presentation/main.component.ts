import { Component,OnInit,DoCheck,OnChanges, SimpleChanges } from '@angular/core';

import { Navigator } from '../state/main.navigator';
import { ClubService } from 'src/app/services/club.service';
import { Club } from 'src/app/models/club.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutocompleteService } from '../state/autocomplete.service';
import { Observable, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,DoCheck{

  clubsData$:Club[] 

  clubName:FormGroup
  

  constructor(private navigator:Navigator, private formBuilder:FormBuilder,private autoCompleteService:AutocompleteService,private clubService:ClubService){
    document.body.style.overflowX = 'hidden'
    this.clubName = this.formBuilder.group({
      search:['']
    })
  }


  ngOnInit(): void {
    this.clubName.get('search')?.valueChanges.pipe(
      filter(keyword => keyword.length > 0),
      switchMap(keyword => this.autoCompleteService.getAutocomplete(keyword))
    ).subscribe(data => {
      this.clubsData$ = data
      console.log('data taken succesfullt', data)
    });
  }

  ngDoCheck(): void {
    
  }
  goToclubs(){
    this.navigator.navigateToClubs()
  }
  
}
