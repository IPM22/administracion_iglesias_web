import React from "react";

const MessageIcon = ({ classname }: { classname?: string }) => {
  return (
    <svg
      className={`icon icon-tabler icon-tabler-message ${classname}`}
      width="30"
      height="30"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 9h8" />
      <path d="M8 13h6" />
      <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
    </svg>
  );
};

export default MessageIcon;
