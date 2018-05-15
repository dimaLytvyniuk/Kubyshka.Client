import { Component, OnInit } from '@angular/core';
import { WalletsService } from '../../services/wallets.service';
import { Router } from '@angular/router';
import { WalletCreateModel } from '../../models/wallet-create.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  styleUrls: ['./wallet-create.component.css']
})
export class WalletCreateComponent implements OnInit {
  wallet = new WalletCreateModel();

  constructor(
    private walletService: WalletsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCreateWallet() {
    this.walletService.createWallet(this.wallet).subscribe((data: any) => {
      this.router.navigate(['wallets']);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('An error occurred:', err.error.message);
      } else {
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    });
  }
}
