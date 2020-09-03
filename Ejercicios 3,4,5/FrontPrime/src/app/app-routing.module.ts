import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PairsComponent} from './components/pairs/pairs.component';
import {PrimesComponent} from './components/primes/primes.component';
import {PairsDBComponent} from './components/pairs-db/pairs-db.component';
import {PrimesDBComponent} from './components/primes-db/primes-db.component';


const routes: Routes = [

  { path: 'nprimes', component: PrimesComponent },
  { path: 'npairs', component: PairsComponent },
  { path: 'nprimesdb', component: PrimesDBComponent },
  { path: 'npairsdb', component: PairsDBComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
