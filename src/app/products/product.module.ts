import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { StarComponent } from '../shared/star.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipes';
import { ProductListComponent } from './product-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductService,
    ProductGuardService
  ],
})
export class ProductModule { }
