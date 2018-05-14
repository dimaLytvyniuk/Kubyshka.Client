import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestUrlBuilder } from './rest-url-builder';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { WalletCreateModel } from '../models/wallet-create.model';
import { Observable } from 'rxjs/Observable';
import { WalletModel } from '../models/wallet.model';

@Injectable()
export class WalletsService {
  private readonly apiServiceUrl: string;

  constructor(
    private http: HttpClient,
    private restUrlBuilder: RestUrlBuilder,
    private router: Router
  ) {
    this.apiServiceUrl = environment['ApiServiceUrl'];
  }

  createWallet(model: WalletCreateModel) {
    return this.http.post(this.restUrlBuilder.build(this.apiServiceUrl, "api", "wallets"), model);
  }

  getWalletsList(): Observable<WalletModel[]> {
    return this.http.get<WalletModel[]>(this.restUrlBuilder.build(this.apiServiceUrl, "api", "wallets"));
  }
}
