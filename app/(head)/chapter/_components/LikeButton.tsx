"use clinet";

import Icon from "@/components/common/Icon/Icon";

const LikeButton = () => {
  return (
    <button
      // onClick={handleBookshelfLikeButton}
      // className={`px-2 py-1 ml-2 w-14 h-4 text-xs ${
      //   actived
      //     ? "text-white bg-red-500 border-red-500"
      //     : "text-red-500 bg-white border-red-500"
      // } border rounded-full`}
      className="text-rose-600 bg-white border-rose-600 border rounded-full px-2 ml-2"
    >
      <div className="flex items-center gap-1">
        <Icon name="FAVORITE" />
        <span className="text-2xl">
          0{/* {activedCount ? activedCount : 0} */}
        </span>
      </div>
    </button>
  );
};
export default LikeButton;
