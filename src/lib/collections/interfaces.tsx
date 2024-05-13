import React from "react";

export interface IMenu {
  label: string;
  href: string;
  icon: React.ReactElement;
}

export interface IGrupo {
  label: string;
  id: number;
  count: number;
}
