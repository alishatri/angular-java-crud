import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/products';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  product:Products;
  id: number;

  constructor(
    private dataService: ApiService,
    private activeRoute : ActivatedRoute,
    private router: Router,
  ) {}

  async ngOnInit() {
    this.product = new Products();
    this.id = this.activeRoute.snapshot.params['id'];
    (await this.dataService.getProduct(this.id)).subscribe(
      data =>{ this.product = data });
  }

  async editData() {
    (await this.dataService.updateProducts(this.product)).subscribe(
      data => this.product = new Products());
      this.router.navigate(['/products']);
  }
}
