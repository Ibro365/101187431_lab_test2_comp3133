import { Component, OnInit } from '@angular/core';
import { SpacexDataService } from "network/spacexapi.service";

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any
  constructor(private spacexDataService: SpacexDataService) { }

  ngOnInit(): void {
    this.spacexDataService.getAllMissions().subscribe((data: any[]) => {
      this.missions = data;
    });
  }


}
