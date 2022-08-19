import { TeamServiceService } from './../../shared/teamService/team-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  teamMembers = [];
  First = 'assets/images/logo2.png';
  constructor(private teamServ: TeamServiceService) {}

  ngOnInit(): void {
    this.teamServ.getTeam().subscribe((res) => {
      this.teamMembers = res;
      for (let i = 0; i <= this.teamMembers.length; i++) {
        if (this.teamMembers[i]?.files[0]) {
          this.teamMembers[i].url =
            'http://localhost:8000/' +
              this.teamMembers[i]?.files[0]?.filePath || '';
        }
      }
      for (let i = 0; i <= this.teamMembers.length; i++) {
        let tempMembers = [...this.teamMembers];
        this.teamMembers = tempMembers.slice(0, 4);
      }
      // console.log('array 2', this.teamArray);
    });
  }
}
