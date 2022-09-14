import { Routes, RouterModule } from '@angular/router';
import { TabelPaginationExampleComponent } from 'src/app/components/tabel-pagination-example/tabel-pagination-example.component';

const routes: Routes = [
  { path:'',
    component:TabelPaginationExampleComponent
},
];

export const TablePagRoutingRoutes = RouterModule.forChild(routes);
