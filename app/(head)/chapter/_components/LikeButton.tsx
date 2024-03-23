"use clinet";

import Icon from "@/components/common/Icon/Icon";
import { useToonClMarkAuthUser } from "@/hooks/apis/use";
import { useToggleIsToonMarkMutation } from "@/hooks/apis/useToggleIsToonMarkMutation";

const LikeButton = ({ toonId }: { toonId: number }) => {
  const { data } = useToonClMarkAuthUser(toonId);
  const { mutate: toggleIsToonMark } = useToggleIsToonMarkMutation(toonId);

  const handleBookshelfLikeButton = () => {
    toggleIsToonMark(toonId);
  };

  return (
    <button
      onClick={handleBookshelfLikeButton}
      className={`${
        data.actived
          ? "text-white bg-rose-600 border-rose-600"
          : "text-rose-600 bg-white border-rose-600"
      } border rounded-full px-2 ml-2`}
    >
      <div className="flex items-center gap-1">
        <Icon name="FAVORITE" size="sm" />
        <span className="text-sm">
          {data.activedCount ? data.activedCount : 0}
        </span>
      </div>
    </button>
  );
};
export default LikeButton;
