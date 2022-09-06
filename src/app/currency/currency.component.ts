import { Component, OnInit } from '@angular/core';
import {ConfigerService} from '../configer.service'

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  title!:string;
  
  Country =null;
  Currency=null;
  toCountery = null
  AskPrice=0
  BidPrice=0
  constructor(public configSer: ConfigerService) {}
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
