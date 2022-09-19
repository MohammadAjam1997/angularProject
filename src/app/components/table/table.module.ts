import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingRoutes } from './tableRouting.routing';
import { TableComponent } from './table.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,TableRoutingRoutes,SharedModule
  ],
  declarations: [TableComponent]
})
export class TableModule { }
