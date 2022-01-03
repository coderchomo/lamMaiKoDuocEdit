import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  sub: Subscription | undefined;
  id: any;
  product: any={};

  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute
  ) {
    this.sub= this.activeRouter.paramMap.subscribe(
      (paramMap : ParamMap)=>{
        this.id=Number(paramMap.get('id'));
        this.product= this.getProductById(this.id);
      }
    );
  }

  ngOnInit(): void {
  }

  editProduct(): void{
    this.productService.edit(this.id,this.product);
  }

  getProductById(id: number): any {
    return this.productService.findById(id);
  }
}
