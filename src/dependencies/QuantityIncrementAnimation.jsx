import React, { useEffect, useState } from "react";

const QuantityIncrementAnimation = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 1000); // مدة الأنميشن

    return () => clearTimeout(timeout);
  }, []); //

  return (
    <div className={`quantity-increment ${animate ? "show" : ""}`}>
      <span>+1</span>
    </div>
  );
};

export default QuantityIncrementAnimation;
