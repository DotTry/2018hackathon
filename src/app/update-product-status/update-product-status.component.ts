import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-product-status',
  templateUrl: './update-product-status.component.html',
  styleUrls: ['./update-product-status.component.css']
})
export class UpdateProductStatusComponent implements OnInit {
  productId: number = -1; 

constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(res=> this.productId = res.id);
    console.log(this.productId);
  }

  ngOnInit() {
  }

}
