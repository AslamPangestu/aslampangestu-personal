import { useState } from "react";
import type { ChangeEvent } from "react";

const ToggleDarkMode = () => {
  const [toggle, setToggle] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setToggle(checked);
    const value = checked ? "dark" : "light";
    if (value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", value);
  };

  return (
    <label className="group relative flex flex-row gap-2.5 bg-primary rounded-full px-3 py-2 cursor-pointer items-center">
      <input
        className="peer sr-only"
        type="checkbox"
        checked={toggle}
        onChange={handleToggle}
      />
      <div className="relative h-6 w-12 rounded-full bg-primary-container transition-all duration-500 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full  after:transition-all after:duration-500 hover:after:scale-95 active:after:scale-90 after:bg-surface peer-checked:after:translate-x-6 peer-checked:bg-inverse-primary-container">
        <span className="absolute inset-1 rounded-full"></span>
        <span className="absolute inset-0 rounded-full"></span>
      </div>
      <span className="text-surface text-lg">Dark Mode</span>
    </label>
  );
};

export default ToggleDarkMode;
