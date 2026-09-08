interface Stat {
  amount: number;
  label: string;
}

export const currentAmount = 89914;
export const GOAL_AMOUNT = 100000;

export const PROJECT_STATS: Stat[] = [
  {
    amount: currentAmount,
    label: "of $100,000 backed",
  },
  {
    amount: 5007,
    label: "total backers",
  },
  {
    amount: 56,
    label: "days left",
  },
];
