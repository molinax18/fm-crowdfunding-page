import type { ICrowdfundState } from "../types/crowdfundContext";
import { getDaysDifference } from "../utils/getDaysDifference";

export const GOAL_DATE = new Date("November 13, 2026 00:00:00");
const INITIAL_DATE = new Date("September 13, 2026 00:00:00");
const DAYS_LEFT = getDaysDifference(INITIAL_DATE, GOAL_DATE);

export const GOAL_AMOUNT = 100000;
export const BAMBOO_STAND_REMAINING = 120;
export const BLACK_EDITION_STAND_REMAINING = 80;
export const MAHOGANY_ESPECIAL_EDITION_REMAINING = 24;

export const CROWDFUND_INITIAL_VALUES: ICrowdfundState = {
  stats: {
    amount: 0,
    goalAmount: GOAL_AMOUNT,
    backers: 0,
    daysLeft: DAYS_LEFT,
  },
  rewards: [
    {
      id: "bamboo-stand",
      title: "Bamboo Stand",
      pledge: 25,
      description: {
        reward:
          "You get an ergonomic stand made of natural bamboo. You've helped us launch our campaign!",
        pledge:
          "Bamboo Stand Pledge $25 or more You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      },
      remaining: BAMBOO_STAND_REMAINING,
    },
    {
      id: "black-edition-stand",
      title: "Black Edition Stand",
      pledge: 75,
      description: {
        reward:
          "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        pledge:
          "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      },
      remaining: BLACK_EDITION_STAND_REMAINING,
    },
    {
      id: "mahogany-special-edition",
      title: "Mahogany Special Edition",
      pledge: 200,
      description: {
        reward:
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list.",
        pledge:
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included",
      },
      remaining: MAHOGANY_ESPECIAL_EDITION_REMAINING,
    },
  ],
};

export const CROWDFUND_CONTEXT_INITIAL_VALUES: ICrowdfundState = {
  stats: {
    amount: 89914,
    goalAmount: GOAL_AMOUNT,
    backers: 5007,
    daysLeft: DAYS_LEFT,
  },
  rewards: [
    {
      id: "bamboo-stand",
      title: "Bamboo Stand",
      pledge: 25,
      description: {
        reward:
          "You get an ergonomic stand made of natural bamboo. You've helped us launch our campaign!",
        pledge:
          "Bamboo Stand Pledge $25 or more You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      },
      remaining: 101,
    },
    {
      id: "black-edition-stand",
      title: "Black Edition Stand",
      pledge: 75,
      description: {
        reward:
          "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        pledge:
          "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      },
      remaining: 64,
    },
    {
      id: "mahogany-special-edition",
      title: "Mahogany Special Edition",
      pledge: 200,
      description: {
        reward:
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list.",
        pledge:
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included",
      },
      remaining: 0,
    },
  ],
};
