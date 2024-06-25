import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = 1000;
  annualInvestment = 0;
  expectedReturn = 3;
  duration = 5;

  constructor(private readonly investmentService: InvestmentResultsService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      duration: this.duration,
      expectedReturn: this.expectedReturn,
    });
  }
}
