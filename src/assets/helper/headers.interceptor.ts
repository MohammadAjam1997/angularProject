import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IntcImlkXCI6XCJhNTgwYTQzMi1iNzcwLTQ1MzgtYWYyMy1kYzU0MDU2NGIzZDNcIixcImZpcnN0TmFtZVwiOlwiQW5vbnltb3VzXCIsXCJsYXN0TmFtZVwiOlwiQW5vbnltb3VzXCIsXCJ1c2VyTmFtZVwiOm51bGwsXCJsYW5ndWFnZVwiOlwiXCIsXCJlbWFpbFwiOlwiXCIsXCJhZGRyZXNzXCI6XCJcIixcInBob25lXCI6XCJcIixcIm1vYmlsZVwiOm51bGwsXCJhY3RpdmVcIjpmYWxzZSxcInZlcmlmaWVkXCI6ZmFsc2UsXCJncm91cElkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcImdyb3VwTmFtZVwiOm51bGwsXCJpc0F1dGhlbnRpY2F0ZWRcIjp0cnVlLFwidGVuYW50TmFtZVwiOlwiZGVtb1wiLFwidGVuYW50SWRcIjpcIjA4ZDk5YzU0LTQ1ZTktNDlhNS04Mzc0LThkMzVlODUyMjI4OVwiLFwic2V0dGluZ0xpc3RcIjpbXX0iLCJhdXRobWV0aG9kIjoiaXNGcm9udCIsIm5iZiI6MTY2MzA1MDE0NywiZXhwIjoxNzQ5NDUwMTQ3LCJpYXQiOjE2NjMwNTAxNDd9.ljYo6GoEEywR9ah9H2KBZodonbcB3hoTiMsPXrv1Rxs'
    
    request = request.clone({
        setHeaders: {
          "Authorization": "Bearer " + apiKey
        }
      })
    return next.handle(request);
  }
}
