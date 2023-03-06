import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseProductsUrl: string = 'http://localhost:8090/product';

  constructor(private httpClient: HttpClient) {}
  
  async getProduct(id:number):Promise<Observable<Products>> {
    return await this.httpClient.get<Products>(this.baseProductsUrl + '/find/' + id);
  }

   getProducts():Observable<Products[]>{
    return this.httpClient.get<Products[]>(`${this.baseProductsUrl}/all`);
  }

  async postProducts(data: Products):Promise<Observable<Products>> {
    return await this.httpClient.post<Products>(`${this.baseProductsUrl}/add`, data);
  }
  
  async updateProducts(product: Products ):Promise <Observable<Products>> {
    return await this.httpClient.put<Products>(this.baseProductsUrl + '/update' , product);
  }

   deleteProduct(id: number) {
    return this.httpClient.delete<Products>(this.baseProductsUrl + '/delete/' + id);
  }
}