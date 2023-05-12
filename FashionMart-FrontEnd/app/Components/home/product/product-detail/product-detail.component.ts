import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Model/product';
import { ApiService } from 'src/app/Service/api.service';

//used to add data to the component class. 
@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
//This is the main class for the component
export class ProductDetailComponent implements OnInit {

  //variables declared within the component
  products: any;
  productid: number;
  private routeSub: Subscription;  //this is variable of type Subscription that is used to subscribe to route parameters.

  constructor(private api: ApiService, private route: ActivatedRoute) { 


    if (this.api.isAuthenticated) {

      this.routeSub = this.route.params.subscribe(params => {
        
        this.productid = parseInt(params['id']);
        this.api.getProductId(this.productid).subscribe(
          res => {
            this.products = res.oblist[0];
            console.log(this.products);
            
          }
        );
      });
      
    }
  }
  //This method is called when the component is initialized ,here it is empty
  ngOnInit() {
  }
  // This method is called when the "Add to Cart" button is clicked
  addToCart(e) {
    this.api.addToCart(e).subscribe(res => {
      console.log(res);
    })
  }

}
