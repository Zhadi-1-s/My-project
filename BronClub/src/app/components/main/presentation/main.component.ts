import { Component,OnInit,DoCheck,ElementRef,HostListener } from '@angular/core';

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
export class MainComponent implements OnInit{

  clubsData$:Club[] 

  clubName:FormGroup
  
  isDropDownVisibile = false;

  constructor(private navigator:Navigator, private formBuilder:FormBuilder,private autoCompleteService:AutocompleteService,private elRef: ElementRef){
    document.body.style.overflowX = 'hidden'
    this.clubName = this.formBuilder.group({
      search:['']
    })
  }


  ngOnInit(): void {
    this.clubName.get('search')?.valueChanges.pipe(
      
      switchMap(keyword => this.autoCompleteService.getAutocomplete(keyword))
    ).subscribe(data => {
      this.clubsData$ = data
      this.isDropDownVisibile = true
      console.log('data taken succesfullt', data)
    });
  }

  @HostListener('document:click',['$event'])
  handleClick(event:Event):void{
    const target = event.target as HTMLElement;

    if(!this.elRef.nativeElement.contains(target)){
      this.isDropDownVisibile = false;
    }
  }

  toggleDropDownVisibility():void{
    this.isDropDownVisibile = !this.isDropDownVisibile
  }
  toogleDropDownAnywhere():void{
    this.isDropDownVisibile = false;
  }

  goToclubs(){
    this.navigator.navigateToClubs()
  }
  
}
