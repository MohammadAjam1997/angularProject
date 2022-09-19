import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency.component';


const routes: Routes = [
  {
    path:'',
    component:CurrencyComponent
  },
];

export const CurrencyRoutingRoutes = RouterModule.forChild(routes);
