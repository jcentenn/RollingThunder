import { Injectable } from '@angular/core';
import * as tokenlib from '../../assets/js/token.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

var TKK = '0';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  

  constructor(private http: HttpClient) {
  }


  doTranslate1(text) {
//      this.get(text).then(function (token1) {
//          console.log(token1);
//      });

//      console.log(tk);
  }
  
  
  updateTKK() {
      const myHeader = new HttpHeaders();
      myHeader.append('X-Requested-With', 'XMLHttpRequest');
      
      return this.http.get('http://localhost:8080/translate.google.com:443', { headers: myHeader, responseType: 'text' })      
  }
  
  
  
  doTranslate()  {
  
  
  
  
  
  
//   this.http.get('http://localhost:8080/translate.google.com:443', { headers: myHeader }).subscribe(data => console.log(data));
 /*
      return new Promise(function (resolve, reject) {
          var now = Math.floor(Date.now() / 3600000);

          if (Number(TKK.split('.')[0]) === now) {
              resolve();
          } else {
              
              http.get('https://translate.google.com')
              .then(function (res) {
                  var code = res.body.match(/TKK=(.*?)\(\)\)'\);/g);

//                  if (code) {
//                      eval(code[0]);
//                      if (typeof TKK !== 'undefined') {
//                          this.TKK = TKK;
//                          //config.set('TKK', TKK);
//                      }
//                  }
  
                  resolve();
              }).catch(function (err) {
                  const e = new Error();
//                  e.code = 'BAD_NETWORK';
                  e.message = err.message;
                  reject(e);

              });
      
          }
      
      });
  
 */      
  }

  
//  get(text) {
//      return this.updateTKK().then(function () {
//          let tk = tokenlib.sM(text);
//          tk = tk.replace('&tk=', '');
//          return {name: 'tk', value: tk};
//      }).catch(function (err) {
//          throw err;
//      });
//  }
  
}
