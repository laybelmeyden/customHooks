import React from "react";

const UseHover = (ref) => {
  const [isHover, setIsHover] = React.useState(false);
  const on = () => setIsHover(true);
  const off = () => setIsHover(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const userRef = ref.current;
    userRef.addEventListener("mouseenter", on);
    userRef.addEventListener("mousemove", on);
    userRef.addEventListener("mouseleave", off);
    return () => {
      userRef.removeEventListener("mouseenter", on);
      userRef.removeEventListener("mousemove", on);
      userRef.removeEventListener("mouseleave", off);
    };
  }, []);
  return isHover;
};

export default UseHover;
