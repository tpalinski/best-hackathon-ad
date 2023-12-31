import { Dispatch, useEffect, useState } from "react";

const getItem = <T>(key: string, defaultValue: T): T => {
   const data = localStorage.getItem(key);
   return data ? JSON.parse(data) as T : defaultValue
}

const setItem = (key: string, data: unknown): void => {
  const stringified = JSON.stringify(data);
  localStorage.setItem(key, stringified)
}

export const useLocalStorage = <T>(key: string, defaultValue: T): [T, Dispatch<T>] => {
  let [data, setData] = useState(() => {
    return getItem(key, defaultValue);
  })
 
  useEffect(() => {
    setItem(key, data)
  }, [key, data])

  return [data, setData]
}

