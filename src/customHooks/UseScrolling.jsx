import React from "react";

const UseScrolling = (parentRef, childRef, callback) => {
  const observer = React.useRef();
  React.useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 1,
    };
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
            callback();
      }
    }, options);
    observer.current.observe(childRef.current);
    return () => observer.current.unobserve(childRef.current);
  }, [callback, childRef, parentRef]);
};

export default UseScrolling;
