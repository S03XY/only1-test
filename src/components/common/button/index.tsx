"use client"
import { twMerge } from "tailwind-merge";

export const CommonButton = ({
  title,
  callback,
  className = "",
  type,
}: {
  title: string;
  callback?: () => void;
  className?: string;
  type?: "submit" | "reset" | "button";
}) => {
  return (
    <button
      type="submit"
      className={twMerge(
        "border-white border p-2 rounded-lg capitalize",
        className
      )}
      onClick={() => {
        callback && callback();
      }}
    >
      {title}
    </button>
  );
};
