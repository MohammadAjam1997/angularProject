import { ConfigerService } from './shared/services/configer.service'
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
  flagA!: string;
 
  directionRTL: boolean = false
  title = 'Currency';
  showFiller = false;
  numberOfitems: number = 0

  @HostBinding('class') css?: string = undefined;
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  AddTOCart() {
    this.numberOfitems = this.numberOfitems + 1
  }
  constructor(public translate: TranslateService, public configSer: ConfigerService) {
    this.configSer.getLanguageApiformLanguage().subscribe((res) => {
      
      this.ArrayOfLanguage = res
      this.flagA=this.ArrayOfLanguage[0].filePreviewPath
     let langsOFadded= res.map((el:any)=>{
        el.code
      })
      translate.addLangs(langsOFadded);
      translate.setDefaultLang(langsOFadded[0]);
      const browserLang: any = translate.getBrowserLang();
      translate.use(browserLang.match(/en|ar/) ? browserLang : langsOFadded);
    });


 
  }
  setImageFlag(flag:any,lang:any){
    this.flagA=flag
    this.translate.use(lang)
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
      return el.name
    })
  }
  ngOnInit(): void {}
  
}
