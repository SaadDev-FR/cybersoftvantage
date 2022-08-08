import { TeamServiceService } from './../../shared/teamService/team-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  teamArray = [
    {
      files: [
        {
          filePath: '',
          fileType: '',
        },
      ],
      designation: '',
      name: '',
      url: '',
    },
  ];

  First = 'assets/images/logo2.png';
  constructor(private teamServ: TeamServiceService) {}

  ngOnInit(): void {
    this.teamServ.getNews().subscribe((res) => {
      this.teamArray = res;
      for (let i = 0; i < this.teamArray.length; i++) {
        this.teamArray[i].url =
          'http://localhost:8000/' + this.teamArray[i].files[0].filePath;
      }
      console.log('array data', this.teamArray);
    });
  }
}
