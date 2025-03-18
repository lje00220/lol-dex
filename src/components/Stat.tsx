import React from "react";

type Props = {
  name: string;
  stat: number;
};

/**
 * 챔피언 상세 페이지에서 스탯을 출력하는 컴포넌트
 *
 * @param {string} props.name
 * @param {number} props.stat
 * @returns {JSX.Element}
 */

const Stat = ({ name, stat }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <span className="font-medium">{name}: </span>
      <span className="font-bold">{stat}</span>
    </div>
  );
};

export default Stat;
