import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-track-product',
  templateUrl: './track-product.component.html',
  styleUrls: ['./track-product.component.css']
})
export class TrackProductComponent implements OnInit {
  productId: number = -1;

  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(res=> this.productId = res.id);
    console.log(this.productId);
  }

  ngOnInit() {

  }

}
