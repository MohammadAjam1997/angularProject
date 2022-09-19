import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePagComponent } from './tablePag.component';
import { TablePagRoutingRoutes } from './tablePagRouting.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [TablePagRoutingRoutes,SharedModule,
    CommonModule
  ],
  declarations: [TablePagComponent]
})
export class TablePagModule { }
