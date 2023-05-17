import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';
import { DeltaComponent } from './delta/delta.component';
import { EpsilonComponent } from './epsilon/epsilon.component';
import { ZetaComponent } from './zeta/zeta.component';
import { EtaComponent } from './eta/eta.component';

const routes: Routes = [
  { path: "alpha-comp", component: AlphaComponent },
  { path: "beta-comp", component: BetaComponent },
  { path: "gamma-comp", component: GammaComponent },
  { path: "delta-comp", component: DeltaComponent },
  { path: "epsilon-comp", component: EpsilonComponent },
  { path: "zeta-comp", component: ZetaComponent },
  { path: "eta-comp", component: EtaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
