import React from "react";
import { FadeLoader } from "react-spinners";

/**
 * 로딩 컴포넌트
 *
 * @returns {JSX.Element}
 */

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <FadeLoader />
    </div>
  );
};

export default Loading;
