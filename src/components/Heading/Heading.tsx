import React from "react";
type HeadingProps = {
  h?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: any;
  style?: React.CSSProperties;
};

const Heading = ({ h = 1, children, className, style }: HeadingProps) => {
  const HeadingTag: any = `h${h}`;

  return (
    <HeadingTag className={className} style={style}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
