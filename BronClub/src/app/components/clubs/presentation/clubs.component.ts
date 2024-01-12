import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Club } from 'src/app/models/club.model';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  clubs:Club[]
  res: any;
  constructor(private clubServie: ClubService,private router: Router){}

  ngOnInit(): void {
      this.clubServie.getClubs().subscribe(
        data => {
          this.clubs =  data;
        },
        error => {
          console.error(error.message)
        }
      )
      this.res = this.clubs.length
  }

  navigateToClub(id:number){
    this.router.navigate(['/club',id])
  }

}
