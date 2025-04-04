
  export const slideIn = (direction, type, delay, duration = 0.6) => {
    return {
      hidden: {
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };