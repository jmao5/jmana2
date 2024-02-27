import { FadeLoader } from "react-spinners";
import "./loading.scss";
import { COLOR } from "@/constants/color";

export default function Loading() {
  return (
    <h1 className="loading__wrapper">
      <FadeLoader color={COLOR.PRIMARY} speedMultiplier={1.3} />
    </h1>
  );
}
