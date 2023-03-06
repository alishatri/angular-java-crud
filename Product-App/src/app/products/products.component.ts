import { Router } from '@angular/router';
import { Products } from 'src/app/products';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(private dataService: ApiService) {  }
  
  ngOnInit() {
    this.getProducts();
  }

   getProducts() {
    (this.dataService.getProducts()).subscribe((data : Products[]) => {
      this.products = data;
    });
  }

   deleteProduct(product: Products) {
    (this.dataService.deleteProduct(product.id)).subscribe((data) => {
      this.products = this.products.filter((p: any) => p !== product);
    });
  }
}
