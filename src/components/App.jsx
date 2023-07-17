import { useSelector } from "react-redux";
import { Account } from "./Account";
import { LangSwitcher } from "./LangSwitcher";

export const App = () => {

  const lang = useSelector(state => state.locale.lang.toUpperCase())

  return (
    <div>
      <LangSwitcher />
      <hr />
      <div>Current lang: {lang}</div>
      <hr />
      <Account />
    </div>
  );
};
