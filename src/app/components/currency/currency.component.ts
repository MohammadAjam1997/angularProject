import { Component, OnInit } from '@angular/core';
import { NgxImgZoomService } from "ngx-img-zoom";
import { CurrencyStateService } from './currency-state.service';
import { Observable } from 'rxjs';
import { ConfigerService } from 'src/app/shared/services/configer.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  currencyes$: Observable<number> = this.currency.$count;
  currencye$: Observable<number> = this.currency.$count2;


  // title!:string;
  title = "Code";
  public imagePath: any;
  imgURL: any;
  public message!: string;
  enableZoom: any = true;
  previewImageSrc: any;
  zoomImageSrc: any;
  Country!: null;
  Currency = null;
  toCountery = null
  AskPrice = 0
  baseRate = 0
  BidPrice = 0

  constructor(public configSer: ConfigerService, private ngxImgZoom: NgxImgZoomService, private currency: CurrencyStateService) {
    this.ngxImgZoom.setZoomBreakPoints([
      { w: 100, h: 100 },
      { w: 150, h: 150 },
      { w: 200, h: 200 },
      { w: 250, h: 250 },
      { w: 300, h: 300 }
    ]);
  }
  increment() {
    this.currency.increment();
  }

  decrement() {
    this.currency.decrement();
  }
  preview(files: any) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.previewImageSrc = reader.result;
      this.zoomImageSrc = reader.result;
    };
  }
  changeUSDtoEUR(e: any) {
    this.AskPrice = (e.target.value) * this.baseRate;

  }
  changeEURtoUSD(e: any) {

    this.BidPrice = (e.target.value) / this.baseRate;
  }
  ngOnInit(): void {

    this.configSer.getcurrencyWithID(3).subscribe(
      (res: any) => {
        console.log(res.map((el: any) => {
          if (el.code == 'USD') {
            this.Country = el.code
            this.BidPrice = el.currencyVal


          }
          if (el.code == 'EUR') {

            this.toCountery = el.code;
            this.AskPrice = el.currencyVal
            this.baseRate = el.currencyVal

          }


        }));


      }
    )


  }

}
