import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}
@Injectable({
  providedIn: 'root'
})
export class ConfigerService {
  constructor(public http: HttpClient) { }

  url='https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo';
  configUrl = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo';

  getAllData(){
      console.log('done');
      return this.http.get<any>(this.url);
    }
    getConfigApiformCurrency() {
    
    return this.http.get<any>(this.configUrl);
  }
}
