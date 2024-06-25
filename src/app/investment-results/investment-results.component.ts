import { Component, computed, signal } from '@angular/core';
import {
  AnnualInvestmentResult,
  InvestmentResultsService,
} from './investment-results.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private readonly investmentService: InvestmentResultsService) {}

  results = computed(() => this.investmentService.results());
}
