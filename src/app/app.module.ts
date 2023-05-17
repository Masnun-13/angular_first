import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';
import { DeltaComponent } from './delta/delta.component';
import { EpsilonComponent } from './epsilon/epsilon.component';
import { ZetaComponent } from './zeta/zeta.component';
import { EtaComponent } from './eta/eta.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    GammaComponent,
    DeltaComponent,
    EpsilonComponent,
    ZetaComponent,
    EtaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
