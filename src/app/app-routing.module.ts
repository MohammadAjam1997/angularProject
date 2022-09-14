import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"currency",
    loadChildren: () => import('../../src/app/components/currency/currency.module').then(m => m.CurrencyModule)
  },
  {
    path:"table",
    loadChildren: () => import('../../src/app/components/table/table.module').then(m => m.TableModule)
  },
  {
    path:"tablePag",
    loadChildren: () => import('./components/tablePag/tablePag.module').then(m => m.TablePagModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
