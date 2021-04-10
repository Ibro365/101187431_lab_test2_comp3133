import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Mission } from "models/mission";
import { SpacexDataService } from "network/spacexapi.service";


@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  missions: Mission;
  flightNumber: number;

  @Input() mission: Mission;

  constructor(private route: ActivatedRoute, private dataService: SpacexDataService) {
    this.route.params.subscribe(params => {
      this.flightNumber = parseInt(params.id, 10);
    });
  }

  ngOnInit(): void {
    this.dataService.getMissionsById(this.flightNumber).subscribe((data: any) => {
      this.missions = data;
    });
  }
}
