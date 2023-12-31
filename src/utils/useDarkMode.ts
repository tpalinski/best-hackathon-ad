import { Dispatch, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage"


export type ToggleableThemes = {
  dark: string,
  light: string,
}

export const useDarkMode = (themes: ToggleableThemes): [boolean, Dispatch<boolean>] => {
  let [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('darkMode', true);
  
  useEffect(() => {
    const theme = isDarkMode ? themes.dark : themes.light
    document.querySelector('html')?.setAttribute('data-theme', theme)
  }, [isDarkMode])

  return [isDarkMode, setIsDarkMode]
}
