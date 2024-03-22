"use clinet";

import Icon from "@/components/common/Icon/Icon";
import { UserToonMarkCheckResponse } from "@/type/response";

const LikeButton = ({
  toonMarkInfo,
}: {
  toonMarkInfo: UserToonMarkCheckResponse;
}) => {
  const { actived, activedCount } = toonMarkInfo;

  return (
    <button
      // onClick={handleBookshelfLikeButton}
      className={`${
        actived
          ? "text-white bg-rose-600 border-rose-600"
          : "text-rose-600 bg-white border-rose-600"
      } border rounded-full px-2 ml-2`}
    >
      <div className="flex items-center gap-1">
        <Icon name="FAVORITE" size="sm" />
        <span className="text-sm">{activedCount ? activedCount : 0}</span>
      </div>
    </button>
  );
};
export default LikeButton;
