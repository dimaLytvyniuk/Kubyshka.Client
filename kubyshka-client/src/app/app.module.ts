import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';;
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthService } from './services/auth.service';
import { RestUrlBuilder } from './services/rest-url-builder';
import { WalletListComponent } from './components/wallet-list/wallet-list.component';
import { WalletCreateComponent } from './components/wallet-create/wallet-create.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { InOutcomesListComponent } from './components/in-outcomes-list/in-outcomes-list.component';
import { InOutcomesCreateComponent } from './components/in-outcomes-create/in-outcomes-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    WalletListComponent,
    WalletCreateComponent,
    StatisticComponent,
    InOutcomesListComponent,
    InOutcomesCreateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RestUrlBuilder,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
