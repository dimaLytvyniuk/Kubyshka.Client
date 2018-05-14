import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestUrlBuilder } from './rest-url-builder';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { InOutComeCreateModel } from '../models/in-outcome-create.model';
import { InOutComeModel } from '../models/in-outcome.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InOutcomesService {
  private readonly apiServiceUrl: string;

  constructor(
    private http: HttpClient,
    private restUrlBuilder: RestUrlBuilder,
    private router: Router
  ) { 
    this.apiServiceUrl = environment['ApiServiceUrl'];
  }

  createInOutcome(model: InOutComeCreateModel) {
    return this.http.post(this.restUrlBuilder.build(this.apiServiceUrl, "api", "bills"), model);
  }

  getInOutComesList(): Observable<InOutComeModel[]> {
    return this.http.get<InOutComeModel[]>(this.restUrlBuilder.build(this.apiServiceUrl, "api", "bills"));
  }
}
