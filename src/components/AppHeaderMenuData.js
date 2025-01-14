import {
  redirectLogin,
} from "../plugins/profile";

export const title = "IT Tools";
export const subtitle = "網管工具";

export const isSaraEnabled = false;
export const onClickSara = (profile) => {
  const isLoggedIn = !!profile;
  redirectLogin(!isLoggedIn);
};

export const menuItems = [];
