import { Component, OnInit } from '@angular/core';
import { PrimeService } from 'src/app/services/prime.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { IPairs } from '../../pairsdb';

@Component({
  selector: 'app-pairs-db',
  templateUrl: './pairs-db.component.html',
  styleUrls: ['./pairs-db.component.css']
})
export class PairsDBComponent implements OnInit {

  number = ''
  pairsdb: IPairs[]
  url = /pairsDB/

  constructor(private primeService:PrimeService, private route: ActivatedRoute,private router: Router,private http: HttpClient) { }

  ngOnInit() {
  }

  firstNpairsDB(){
    this.http.get<IPairs[]>(this.url + this.number).subscribe((data) =>{
      console.log(data)
      this.pairsdb = data
    })
  }

}
