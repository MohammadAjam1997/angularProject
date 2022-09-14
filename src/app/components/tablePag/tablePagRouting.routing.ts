import { Routes, RouterModule } from '@angular/router';
import { TablePagComponent } from './tablePag.component';
// import { TabelPaginationExampleComponent } from 'src/app/components/tabel-pagination-example/tabel-pagination-example.component';

const routes: Routes = [
  { path:'',
    component:TablePagComponent
},
];

export const TablePagRoutingRoutes = RouterModule.forChild(routes);
