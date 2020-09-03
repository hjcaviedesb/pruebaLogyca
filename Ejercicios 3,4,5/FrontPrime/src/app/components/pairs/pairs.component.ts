import { Component, OnInit } from '@angular/core';
import { PrimeService } from 'src/app/services/prime.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-pairs',
  templateUrl: './pairs.component.html',
  styleUrls: ['./pairs.component.css']
})
export class PairsComponent implements OnInit {

  number = ''
  pairs: any
  url = /pairs/

  constructor(private primeService:PrimeService, private route: ActivatedRoute,private router: Router,private http: HttpClient) { }

  ngOnInit() {
  }

  firstNpairs(){
    this.http.get<any[]>(this.url + this.number).subscribe((data) =>{
      console.log(data)
      this.pairs = data
    })
  }

}
