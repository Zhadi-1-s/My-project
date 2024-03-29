import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'

import { Club } from '../models/club.model';



@Injectable({
  providedIn: 'root'
})
export class ClubService {

  clubs:Club[] = [
    {id:1,name:'Bro',rating:5.0,mainPhoto:'assets/clubs/Bro/main.png',photoURL:['assets/clubs/Bro/area.jpg','assets/clubs/Bro/area2.jpg'],location:'Abaya 55'},
    {id:2,name:'Dofg',rating:6.8,mainPhoto:'assets/clubs/dofg/main.jpg',photoURL:['some photos'],location:'Тимирязова 132а'},
    {id:3,name:'Chicago',rating:10, mainPhoto:'assets/clubs/chicago/main.png',photoURL:['somPhoto'],location:'Тоганас Батыр 102'},
    {id:4,name:'Meta',rating:5.5,mainPhoto:'assets/clubs/meta/main.jpg',photoURL:['photos'],location:'Розыбакеива 283'}
  ];

  constructor() { }

  getClubs():Observable<any>{
    return of(this.clubs)
  } 

  getClubById(id:number):Observable<any>{
        const club = this.clubs.find(c => c.id === id)
        return of(club)
  }
  
}
