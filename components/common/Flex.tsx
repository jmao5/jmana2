import classNames from "classnames";

interface FlexProps {
  children: any;
  direction?: string;
  align?: string;
  justify?: string;
  gap?: number;
  classNameList?: string[];
}

const Flex = ({
  children,
  direction = "row",
  align = "start",
  justify = "start",
  gap = 0,
  classNameList = [],
}: FlexProps) => {
  return (
    <div
      className={classNames(
        "display: flex",
        `flex-direction: ${direction}`,
        `align-items: ${align}`,
        `justify-content: ${justify}`,
        `gap: ${gap}px,`,
        classNameList
      )}
    >
      {children}
    </div>
  );
};

export default Flex;
