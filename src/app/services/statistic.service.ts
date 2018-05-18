import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestUrlBuilder } from './rest-url-builder';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class StatisticService {
  private readonly apiServiceUrl: string;

  constructor(
    private http: HttpClient,
    private restUrlBuilder: RestUrlBuilder,
    private router: Router
  ) { 
    this.apiServiceUrl = environment['ApiServiceUrl'];
  }

  getIncomesPercentage() {
    return this.http.get(this.restUrlBuilder.build(this.apiServiceUrl, "api", "statistics", "incomes","percentage"))
      .map(result => result);
  }

  getOutcomesPercentage() {
    return this.http.get(this.restUrlBuilder.build(this.apiServiceUrl, "api", "statistics", "outcomes","percentage"))
      .map(result => result);
  }

  getOutcomesPerMonth(year: number, month: number) {
    return this.http.get(this.restUrlBuilder.build(this.apiServiceUrl, "api", 
        "statistics", "outcomes",`per-month?year=${year}&month=${month}`))
      .map(result => result);
  }

  getIncomesPerMonth(year: number, month: number) {
    return this.http.get(this.restUrlBuilder.build(this.apiServiceUrl, "api", 
        "statistics", "incomes",`per-month?year=${year}&month=${month}`))
      .map(result => result);
  }
}
