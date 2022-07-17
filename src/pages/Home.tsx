import { useSelector } from "react-redux";
import { ColorModeInterface } from "../Interfaces/ColorModeInterface";

export const Home = () => {
  const isDark = useSelector((state: ColorModeInterface) => state.theme.isDark);

  return (
    <div className={`${isDark ? "bg-slate-800 text-white" : null}`}>Home</div>
  );
};
