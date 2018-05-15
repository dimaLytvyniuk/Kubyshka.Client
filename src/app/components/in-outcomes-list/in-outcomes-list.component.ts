import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InOutComeModel } from '../../models/in-outcome.model';
import { InOutcomesService } from '../../services/in-outcomes.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-in-outcomes-list',
  templateUrl: './in-outcomes-list.component.html',
  styleUrls: ['./in-outcomes-list.component.css']
})
export class InOutcomesListComponent implements OnInit {
  private inOutComesList: InOutComeModel[];

  constructor(
    private inOutComesService: InOutcomesService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.getInOutcomes();
  }

  getInOutcomes() {
    this.inOutComesService.getInOutComesList().subscribe((data: InOutComeModel[]) => {
      this.inOutComesList = data;
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
