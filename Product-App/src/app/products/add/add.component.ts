import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  angForm: any;
  
  ngOnInit(): void {}

  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,
  ) {
    this.angForm = this.fb.group({
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      quantity: new FormControl(''),
    });
  }

  async addData() {
    (await this.dataService
      .postProducts(this.angForm.value))
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['products']);
        },
        (error) => {
          alert("Something going wrong")
        }
      );
    this.router.navigate(['products']);
  }
}
