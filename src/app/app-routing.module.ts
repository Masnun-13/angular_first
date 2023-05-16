import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';

const routes: Routes = [
  { path: "alpha-comp", component: AlphaComponent },
  { path: "beta-comp", component: BetaComponent },
  { path: "gamma-comp", component: GammaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
