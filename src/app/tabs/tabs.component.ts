import { Component, OnInit,HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @HostBinding('class') css?: string = undefined;
  directionRTL: boolean = false

  constructor(public translate: TranslateService) {
   
  }
  ngOnInit(): void {
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
}
