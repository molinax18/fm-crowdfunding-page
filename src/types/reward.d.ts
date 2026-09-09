export interface IReward {
  id: string;
  title: string;
  pledge: number;
  description: {
    reward: string;
    pledge: string;
  };
  remaining: number;
}
