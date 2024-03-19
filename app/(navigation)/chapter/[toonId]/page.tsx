import classNames from "classnames";

export default function PlanIdPage({ params }: { params: { toonId: string } }) {
  const { toonId } = params;

  return <div className={classNames("plans-page")}>{toonId}</div>;
}
