export type InGameMenuData = {
  question: string;
  cancelLabel: string;
  validateLabel: string;
  choiceHandler: (userChoice: boolean) => void;
};
