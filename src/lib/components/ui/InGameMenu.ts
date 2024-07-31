export type InGameMenuData = {
  type: "Restart" | "X" | "O" | "TIE";
  choiceHandler: (userChoice: boolean) => void;
};
