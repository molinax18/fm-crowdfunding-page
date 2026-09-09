export type TRewardId =
  "bamboo-stand" | "black-edition-stand" | "mahogany-special-edition";

export interface IReward {
  id: TRewardId;
  title: string;
  pledge: number;
  description: {
    reward: string;
    pledge: string;
  };
  remaining: number;
}
