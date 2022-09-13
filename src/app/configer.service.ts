import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}
@Injectable({
  providedIn: 'root'
})
export class ConfigerService {
  constructor(@Inject("BASE_URL") public baseUrl: string, public http: HttpClient) { }

  url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo';
  configUrl = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=demo';
  token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IntcImlkXCI6XCJhNTgwYTQzMi1iNzcwLTQ1MzgtYWYyMy1kYzU0MDU2NGIzZDNcIixcImZpcnN0TmFtZVwiOlwiQW5vbnltb3VzXCIsXCJsYXN0TmFtZVwiOlwiQW5vbnltb3VzXCIsXCJ1c2VyTmFtZVwiOm51bGwsXCJsYW5ndWFnZVwiOlwiXCIsXCJlbWFpbFwiOlwiXCIsXCJhZGRyZXNzXCI6XCJcIixcInBob25lXCI6XCJcIixcIm1vYmlsZVwiOm51bGwsXCJhY3RpdmVcIjpmYWxzZSxcInZlcmlmaWVkXCI6ZmFsc2UsXCJncm91cElkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcImdyb3VwTmFtZVwiOm51bGwsXCJpc0F1dGhlbnRpY2F0ZWRcIjp0cnVlLFwidGVuYW50TmFtZVwiOlwiZGVtb1wiLFwidGVuYW50SWRcIjpcIjA4ZDk5YzU0LTQ1ZTktNDlhNS04Mzc0LThkMzVlODUyMjI4OVwiLFwic2V0dGluZ0xpc3RcIjpbXX0iLCJhdXRobWV0aG9kIjoiaXNGcm9udCIsIm5iZiI6MTY2MzA1MDE0NywiZXhwIjoxNzQ5NDUwMTQ3LCJpYXQiOjE2NjMwNTAxNDd9.ljYo6GoEEywR9ah9H2KBZodonbcB3hoTiMsPXrv1Rxs"


  getAllData() {
    return this.http.get<any>(this.url);
  }
  getConfigApiformCurrency() {

    return this.http.get<any>(this.configUrl);
  }
  getLanguageApiformLanguage() {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token);

    const httpOptions = {
      headers: headers_object
    };
    return this.http.get<any>(`${this.baseUrl}/api/Language/getAllLangs`, httpOptions)
  }
}
