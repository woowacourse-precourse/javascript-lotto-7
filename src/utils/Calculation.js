import { UNIT } from '../constants/Constants.js';

export const ticketCount = (cost) => {
  return Number(cost) / UNIT.TICKET_PRICE;
};

export const ROI = (total, cost) => {
  return ((total / cost) * 100).toFixed(1);
};
