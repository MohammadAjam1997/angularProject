import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import { TableComponent } from './table/table.component';
import { DialogWithEditComponent } from './dialog-with-edit/dialog-with-edit.component';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { TabelPaginationExampleComponent } from './tabel-pagination-example/tabel-pagination-example.component';
import { DialogForDeletedAllComponent } from './dialog-for-deleted-all/dialog-for-deleted-all.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    TabsComponent,
    TableComponent,
    DialogWithEditComponent,
    DialogEditComponent,
    TabelPaginationExampleComponent,
    DialogForDeletedAllComponent,
    FormReactiveComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
