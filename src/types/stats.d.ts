export interface IStat {
  amount: number;
  goalAmount: number;
  backers: number;
  daysLeft: number;
}

export interface IStatUI {
  amount: string;
  label: string;
  daysLeft?: string;
}
