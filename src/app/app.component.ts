import { ConfigerService } from './configer.service'
import { Component, HostBinding, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ArrayOfLanguage: any = []
  user!: { firstName: string; lastName: string; };
  welcome!: string;
  usernameLabel!: string;
  passwordLabel!: string;
  flagArabic!: string;
  flagEnglish!: string;
  directionRTL: boolean = false
  title = 'Currency';
  showFiller = false;
  numberOfitems: number = 0

  @HostBinding('class') css?: string = undefined;

  AddTOCart() {
    this.numberOfitems = this.numberOfitems + 1
  }
  constructor(public translate: TranslateService, public configSer: ConfigerService) {
    this.configSer.getLanguageApiformLanguage().subscribe((res) => {
      
      console.log(res);
      this.ArrayOfLanguage = res.map((el: any) => {
        if(el.code=='ar'){
          this.flagArabic=el.filePreviewPath
        }
        if(el.code=='en'){
          this.flagEnglish=el.filePreviewPath
        }
        return el.code
      })
      translate.addLangs(this.ArrayOfLanguage);
      translate.setDefaultLang(this.ArrayOfLanguage[0]);
      const browserLang: any = translate.getBrowserLang();
      translate.use(browserLang.match(/en|ar/) ? browserLang : this.ArrayOfLanguage);
    });


 
  }
  ngDoCheck() {


    if (this.translate.currentLang == 'ar') {
      this.css = 'active';

      this.directionRTL = true
    } else {
      this.directionRTL = false
      this.css = undefined;

    }
  }
  ngOnChanges() {
    this.translate.addLangs(this.ArrayOfLanguage);

  }
  getArrayOfLanguage() {
    this.ArrayOfLanguage.map((el: any) => {
      console.log(el.name);
      return el.name
    })
  }
  ngOnInit(): void {

   




  }
}
