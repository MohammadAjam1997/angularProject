import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatTreeModule} from '@angular/material/tree';

import { SharedRoutingModule } from './shared-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatDialogModule, MatFormFieldModule, MatTabsModule, MatButtonModule, FormsModule, MatPaginatorModule, NgxPaginationModule, ReactiveFormsModule, MatExpansionModule,
    MatSidenavModule, SharedRoutingModule, MatBadgeModule, MatSliderModule, MatGridListModule, MatCardModule, MatInputModule, MatCheckboxModule, MatTableModule, MatIconModule, MatMenuModule
 ,MatDatepickerModule,MatTreeModule ],
  exports: [MatDialogModule, MatFormFieldModule, MatTabsModule, MatButtonModule, FormsModule, MatPaginatorModule, NgxPaginationModule, ReactiveFormsModule, MatExpansionModule,
    MatSidenavModule, MatSliderModule, MatGridListModule, MatBadgeModule, MatCardModule, MatInputModule, MatCheckboxModule, MatTableModule, MatIconModule, MatMenuModule
 ,MatDatepickerModule,MatTreeModule ]
})
export class SharedModule { }
