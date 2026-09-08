export interface Reward {
  id: string;
  title: string;
  pledge: number;
  description: string;
  remaining: number;
}

export const PROJECT_REWARDS: Reward[] = [
  {
    id: "bamboo-stand",
    title: "Bamboo Stand",
    pledge: 25,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our campaign!",
    remaining: 101,
  },
  {
    id: "black-edition-stand",
    title: "Black Edition Stand",
    pledge: 75,
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    remaining: 64,
  },
  {
    id: "mahogany-special-edition",
    title: "Mahogany Special Edition",
    pledge: 200,
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list.",
    remaining: 0,
  },
];
