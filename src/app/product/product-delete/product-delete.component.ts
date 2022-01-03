import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Subscribable, Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  sub: Subscription | undefined;
  id: any;
  product: any={};

  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute
  ) {
    this.sub= this.activeRouter.paramMap.subscribe(
      (paramMap: ParamMap)=>{
        this.id=Number(paramMap.get('id'));
      }
    )
}

  ngOnInit(): void {
  }

  delete(): void {
    this.productService.delete(this.id);
  }
}
