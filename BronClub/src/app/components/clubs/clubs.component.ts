import { Component ,OnInit} from '@angular/core';
import { Club } from 'src/app/models/club.model';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  clubs:Club[]

  constructor(private clubServie: ClubService){}

  ngOnInit(): void {
      this.clubServie.getClubs().subscribe(
        data => {
          this.clubs =  data;
        },
        error => {
          console.error(error.message)
        }
      )
  }

}
