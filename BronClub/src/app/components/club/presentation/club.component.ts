import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Club } from 'src/app/models/club.model';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  constructor(private clubService:ClubService, private route: ActivatedRoute){}

  club:Club;

  images:string[];

  selectedIndex = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any)=>{
      const id = +params.get('id');
      this.clubService.getClubById(id).subscribe(
        data => {
          this.club = data;
          this.images = data.photoURL;
          console.log('Дата взят правильно',this.images)
        },
        error => {
          console.log(error.message)
        }
      )
    })
  }

  selectImage(index:number){
    this.selectedIndex = index
  }

}
