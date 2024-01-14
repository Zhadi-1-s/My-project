import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class Navigator{

    constructor(private router: Router){}

    navigateToClubs(){
        this.router.navigate(['clubs/'])
    }
    NavigateToMain(){
        this.router.navigate(['main/'])
    }
    navigateToClub(id:number):void{
        this.router.navigate(['/club',id])
    }
}