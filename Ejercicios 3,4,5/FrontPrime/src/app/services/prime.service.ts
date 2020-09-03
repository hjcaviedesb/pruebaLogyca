import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrimeService {

  pairsUrl = /pairs/
  primesUrl = /primes/


  constructor(private http:HttpClient) { }
  

  getPairs(num) {
    return this.http.get(this.pairsUrl+`${num}`);
  }

  getPrimes(num) {
    console.log
    return this.http.get(this.primesUrl+num);
  }

  getPairsDB(num) {
    return this.http.get(`/pairsDB/${num}`);
  }

  getPrimesDB(num) {
    return this.http.get(`/primesDB/${num}`);
  }



}
