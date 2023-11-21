import { withUt } from "uploadthing/tw";

import { type Config } from "tailwindcss";

export default withUt({
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "old-brick": {
          "50": "#fef2f2",
          "100": "#fee2e2",
          "200": "#fdcbcb",
          "300": "#fba6a6",
          "400": "#f67373",
          "500": "#ed4646",
          "600": "#da2828",
          "700": "#b71e1e",
          "800": "#9a1d1d",
          "900": "#7e1e1e",
          "950": "#440b0b",
        },
      },
    },
  },
  plugins: [],
});

