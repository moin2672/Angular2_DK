import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse}from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {IProduct} from "./product";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";


@Injectable()

export class ProductService {

private product_URL="../../api/products/products.json";

constructor(private _http: HttpClient) {

}

getProducts(): Observable<IProduct[]> {
  return this._http.get<IProduct[]>(this.product_URL)
                    .do(data => console.log("All: " + JSON.stringify(data)))
                    .catch(this.handleError);
}
private handleError(err: HttpErrorResponse) {
  console.log(err.message);
  return Observable.throw(err.message);
}

}
