import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

export const SearchBar = ({
  placeholder = "",
  className = "",
  callback,
}: {
  placeholder?: string;
  className?: string;
  callback?: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={twMerge("p-2 rounded-lg", className)}
      onChange={(e) => {
        callback && callback(e);
      }}
    />
  );
};
