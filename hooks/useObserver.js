import React, { useState, useEffect } from "react";

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState();

  const observer = new IntersectionObserver(([entry]) => {
    // console.log(
    //   "entry.isIntersecting ==>",
    //   entry.target.id,
    //   entry.isIntersecting
    // );
    if (entry.isIntersecting) {
      // console.log(
      //   "entry.isIntersecting ==>",
      //   entry.target.id,
      //   entry.isIntersecting
      // );
      setIntersecting(entry.target.id);
    }
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.map((el) => observer.observe(el.current));
      // console.log(ref.current);
      // Remove the observer as soon as the component is unmounted
      return () => {
        observer.disconnect();
      };
    }
  }, [ref.current]);

  // console.log("isIntersecting", isIntersecting);

  return isIntersecting;
}
