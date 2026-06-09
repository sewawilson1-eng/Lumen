export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Service",
    links: [
      { label: "The Service", href: "#service" },
      { label: "How it works", href: "#how" },
      { label: "Before & after", href: "#results" },
      { label: "Find out if you're a candidate", href: "#quiz" },
    ],
  },
  {
    title: "Book",
    links: [
      { label: "Essential — 45 min", href: "#sessions" },
      { label: "Signature — 60 min", href: "#sessions" },
      { label: "Deluxe — 90 min", href: "#sessions" },
      { label: "Aftercare", href: "#faq" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Location", href: "#location" },
      { label: "Contact", href: "#location" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cancellation", href: "#faq" },
      { label: "Accessibility", href: "#" },
    ],
  },
];
