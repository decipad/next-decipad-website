import localFont from "next/font/local";

export const ABC_Diatype = localFont({
  src: [
    {
      path: "./ABCDiatype-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./ABCDiatype-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./ABCDiatype-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
