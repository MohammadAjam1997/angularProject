import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './components/tabs/tabs.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgxImgZoomModule } from "ngx-img-zoom";

import { getBaseUrl } from "./shared/services/config";
import { HeadersInterceptor } from '../assets/helper/headers.interceptor';
import { DialogWithEditComponent } from './components/table/dialog-with-edit/dialog-with-edit.component';
import { DialogEditComponent } from './components/table/dialog-edit/dialog-edit.component';
import { DialogForDeletedAllComponent } from './components/table/dialog-for-deleted-all/dialog-for-deleted-all.component';
import { CollapsForSideBarComponent } from './components/collapsForSideBar/collapsForSideBar.component';
import { HeaderComponent } from './components/header/header.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    CollapsForSideBarComponent,HeaderComponent,
    AppComponent,
    TabsComponent,
    DialogWithEditComponent,
    DialogEditComponent,
    DialogForDeletedAllComponent,
  ],
  imports: [
    SharedModule,NgxImageZoomModule,NgxImgZoomModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: "BASE_URL", useFactory: getBaseUrl },{
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
