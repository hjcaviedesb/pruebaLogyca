import { Component, OnInit } from '@angular/core';
import { PrimeService } from 'src/app/services/prime.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { IPrime } from '../../primedb';


@Component({
  selector: 'app-primes-db',
  templateUrl: './primes-db.component.html',
  styleUrls: ['./primes-db.component.css']
})
export class PrimesDBComponent implements OnInit {

  number = ''
  primesdb: IPrime[]
  url = /primesDB/

  constructor(private primeService:PrimeService, private route: ActivatedRoute,private router: Router,private http: HttpClient) { }

  ngOnInit() {

  }

  firstNprimesDB(){
    this.http.get<IPrime[]>(this.url + this.number).subscribe((data) =>{
      console.log(data)
      this.primesdb = data
    })
  }

}
