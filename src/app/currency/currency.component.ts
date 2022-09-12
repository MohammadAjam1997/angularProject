import { Component, OnInit } from '@angular/core';
import {ConfigerService} from '../configer.service'
import { NgxImgZoomService } from "ngx-img-zoom";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  name = 'Angular';

  myThumbnail="https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
  // title!:string;
  title = "CodeSandbox";
  public imagePath:any;
  imgURL: any;
  public message!: string;
  enableZoom: any = true;
  previewImageSrc: any;
  zoomImageSrc: any;
  Country =null;
  Currency=null;
  toCountery = null
  AskPrice=0
  BidPrice=0
  
  constructor(public configSer: ConfigerService, private ngxImgZoom : NgxImgZoomService) {
    this.ngxImgZoom.setZoomBreakPoints([
      { w: 100, h: 100 },
      { w: 150, h: 150 },
      { w: 200, h: 200 },
      { w: 250, h: 250 },
      { w: 300, h: 300 }
    ]);
  }
  preview(files:any) {
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
      //this.imgURL = reader.result;
      this.previewImageSrc = reader.result;
      this.zoomImageSrc = reader.result;
    };
  }
  changeUSDtoEUR(e:any) {
    
    this.AskPrice = (e.target.value)*this.AskPrice;
  }
  changeEURtoUSD(e:any) {
           
    this.BidPrice = (e.target.value)/this.AskPrice;
  }
  ngOnInit(): void {
    this.configSer.getConfigApiformCurrency().subscribe(
      (res:any) =>{
        console.log('res',res["Realtime Currency Exchange Rate"]);
        this.AskPrice=res["Realtime Currency Exchange Rate"]["9. Ask Price"]
        this.BidPrice=res["Realtime Currency Exchange Rate"]["8. Bid Price"]
        this.Country=res["Realtime Currency Exchange Rate"]["1. From_Currency Code"]
        this.toCountery=res["Realtime Currency Exchange Rate"]["3. To_Currency Code"]
      }
    )
    this.configSer.getAllData().subscribe(
      (res:any) =>{
        console.log(res);
        this.title=res
        this.Country=res.Country
        
      }
    )

  }

}
