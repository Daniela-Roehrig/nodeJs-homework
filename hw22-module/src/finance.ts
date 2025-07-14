export class LoanCalculator {
  static calculateMonthlyPayment(
    principal: number,
    annualRate: number,
    years: number
  ): number {
    const monthlyRate = annualRate / 100 / 12;
    const n = years * 12;
    return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
  }
}

export class TaxCalculator {
  static calculateIncomeTax(income: number, taxRate: number): number {
    return (income * taxRate) / 100;
  }
}
