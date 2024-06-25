import { Injectable, signal } from '@angular/core';

export interface InvestmentInput {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
}

export interface AnnualInvestmentResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

@Injectable({ providedIn: 'root' })
export class InvestmentResultsService {
  results = signal<AnnualInvestmentResult[]>([]);

  public calculateInvestmentResults({
    initialInvestment,
    duration,
    annualInvestment,
    expectedReturn,
  }: InvestmentInput) {
    let investmentValue = initialInvestment;
    const data: AnnualInvestmentResult[] = [];

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      data.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.results.set(data);
  }
}
