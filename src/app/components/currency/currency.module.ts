import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyRoutingRoutes } from './currencyRouting.routing';
import { CurrencyComponent } from './currency.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,SharedModule,
    CurrencyRoutingRoutes
  ],
  exports: [
    CurrencyComponent,
  ],
  declarations: [CurrencyComponent]
})
export class CurrencyModule { }
