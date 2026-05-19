export type Step = {
  number: string;
  title: string;
  body: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Book",
    body: "Choose a session length online. The exact studio address is sent the moment your appointment is confirmed.",
  },
  {
    number: "02",
    title: "Arrive",
    body: "Settle into the chair. A short consult, a shade reading, lip and gum protection. Then we begin.",
  },
  {
    number: "03",
    title: "Glow",
    body: "Relax through the LED cycles. Walk out a noticeably brighter shade — most clients see results immediately.",
  },
];
