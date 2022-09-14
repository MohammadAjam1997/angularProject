import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePagComponent } from './tablePag.component';
import { TablePagRoutingRoutes } from './tablePagRouting.routing';

@NgModule({
  imports: [TablePagRoutingRoutes,
    CommonModule
  ],
  declarations: [TablePagComponent]
})
export class TablePagModule { }
