import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-product-request',
  templateUrl: './update-product-request.component.html',
  styleUrls: ['./update-product-request.component.css']
})
export class UpdateProductRequestComponent implements OnInit {
  productRequestId: number = -1; 

  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(res=> this.productRequestId = res.id);
    console.log(this.productRequestId);
  }

  ngOnInit() {
  }

}
