'use client';
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if(theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

  return (
    <div className="w-fit">
      <button onClick={toggleTheme}>
        {
          theme == "dark"
            ?
          <MdOutlineLightMode size={"2.5em"}/>
            :
          <MdOutlineDarkMode size={"2.5em"}/>
        }
      </button>
    </div>
  )
}
