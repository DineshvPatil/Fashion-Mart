
import { Component, OnInit, Input, Output } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/Model/product';
import { EventEmitter } from '@angular/core';
import {Swal} from 'sweetalert2/dist/sweetalert2.js'; 
import { Router } from '@angular/router';

//This is the component decorator, which sets the component selector to 'app-product' 
//and specifies the HTML template and CSS styles for the component.
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

// It declares a private variable called route of type Router
// an input property called product, and an output property called productAddToCart of type EventEmitter<Product>
export class ProductComponent implements OnInit {
  private route: Router;
  @Input() public product;

  @Output() productAddToCart: EventEmitter<Product> = new EventEmitter<Product>();
  constructor(private http: HttpClient,     private router: Router    ) { }

  //. It is used to perform any initialization logic that depends on input 
  ngOnInit() {

  }

  ViewProductDetail(e){
    console.log(e);
    let url: string = "/home/product/" + e;
    this.router.navigateByUrl(url);
  }

  addToCart() {
    
    this.productAddToCart.emit(this.product);
    alert('product added in the cart!!');
  }

}
