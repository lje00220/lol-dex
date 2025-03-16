import React from "react";

type Props = {
  name: string;
  stat: number;
};

const Stat = ({ name, stat }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <span className="font-medium">{name}: </span>
      <span className="font-bold">{stat}</span>
    </div>
  );
};

export default Stat;
