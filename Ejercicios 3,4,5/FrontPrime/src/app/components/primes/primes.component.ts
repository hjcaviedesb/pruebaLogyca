import { Component, OnInit } from '@angular/core';
import { PrimeService } from 'src/app/services/prime.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-primes',
  templateUrl: './primes.component.html',
  styleUrls: ['./primes.component.css']
})
export class PrimesComponent implements OnInit {

  constructor(private primeService:PrimeService, private route: ActivatedRoute,private router: Router,private http: HttpClient) { }

  number = ''
  primes: any
  url = /primes/

  ngOnInit() {


  }

  firstNprime(){
    this.http.get<any[]>(this.url + this.number).subscribe((data) =>{
      console.log(data)
      this.primes = data
    })
  }

}
