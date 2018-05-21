import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  zoneId: number = -1;

  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(res=> this.zoneId = res.id);
    console.log(this.zoneId);
  }

  ngOnInit() {
  }

}
