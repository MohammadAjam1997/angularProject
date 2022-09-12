import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user!: { firstName: string; lastName: string; };
  welcome!: string;
  usernameLabel!: string;
  passwordLabel!: string;
  directionRTL: boolean = false
  title = 'Currency';
  showFiller = false;
  numberOfitems: number = 0

  @HostBinding('class') css?: string = undefined;

  AddTOCart() {
    this.numberOfitems = this.numberOfitems + 1
  }
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');


    const browserLang: any = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
  }
  ngDoCheck() {
    
   
    console.log('translate', this.translate.currentLang);
    if (this.translate.currentLang == 'ar') {
      this.css = 'active';

      this.directionRTL = true
    } else {
      this.directionRTL = false
      this.css = undefined;

    }
  }
  ngOnInit(): void {
  }
}
