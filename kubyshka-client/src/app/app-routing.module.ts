import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { WalletListComponent } from './components/wallet-list/wallet-list.component';
import { WalletCreateComponent } from './components/wallet-create/wallet-create.component';
import { InOutcomesListComponent } from './components/in-outcomes-list/in-outcomes-list.component';
import { InOutcomesCreateComponent } from './components/in-outcomes-create/in-outcomes-create.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'wallets', component: WalletListComponent },
  { path: 'add-wallet', component: WalletCreateComponent },
  { path: 'in-outcomes', component: InOutcomesListComponent },
  { path: 'add-in-outcomes/:id', component: InOutcomesCreateComponent },
  { path: 'statistic', component: StatisticComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }