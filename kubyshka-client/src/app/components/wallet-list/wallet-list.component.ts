import { Component, OnInit } from '@angular/core';
import { WalletModel } from '../../models/wallet.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WalletsService } from '../../services/wallets.service';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css']
})
export class WalletListComponent implements OnInit {
  private walletList: WalletModel[];

  constructor(
    private walletService: WalletsService
  ) { }

  ngOnInit() {
    this.getWallets();
  }

  getWallets() {
    this.walletService.getWalletsList().subscribe((data: WalletModel[]) => {
      this.walletList = data;
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
