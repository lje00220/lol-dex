"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

/**
 * 에러 처리 페이지
 *
 * @param {Error & { digest?: string }} props.error
 * @param {() => void} props.reset
 * @returns {JSX.Element}
 */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { refresh } = useRouter();

  return (
    <div className="mx-auto mt-6 flex w-2/3 flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-red-500">
        에러가 발생했습니다!
      </h2>
      <p className="mt-5 text-center text-xl">{error.message}</p>
      <button
        className="mt-3 rounded-xl bg-red-500 px-4 py-2 text-white"
        onClick={() =>
          startTransition(() => {
            refresh();
            reset();
          })
        }
      >
        다시 시도하기
      </button>
    </div>
  );
}
