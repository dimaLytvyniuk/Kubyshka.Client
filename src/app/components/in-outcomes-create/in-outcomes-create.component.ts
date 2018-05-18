import { Component, OnInit } from '@angular/core';
import { InOutComeCreateModel } from '../../models/in-outcome-create.model';
import { ActivatedRoute, Router } from '@angular/router';
import { InOutcomesService } from '../../services/in-outcomes.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-in-outcomes-create',
  templateUrl: './in-outcomes-create.component.html',
  styleUrls: ['./in-outcomes-create.component.css']
})
export class InOutcomesCreateComponent implements OnInit {
  model = new InOutComeCreateModel();
  optionInOutCome: string;

  userTags: string[] = [
    "Food",
    "Sport",
    "Fuel",
    "Entertainment",
    "Education",
    "Bills"
  ];

  constructor(
    private route: ActivatedRoute,
    private inOutComeService: InOutcomesService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  onCreateWallet() {
    this.model.wallet = +this.route.snapshot.paramMap.get('id');
    let date = new Date();
    this.model.date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    
    if (this.optionInOutCome == "Outcome") {
      this.model.amount *= -1;
    }

    this.inOutComeService.createInOutcome(this.model).subscribe((data: any) => {
      this.router.navigate(['/in-outcomes']);
      console.log(this.model.tags);
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
