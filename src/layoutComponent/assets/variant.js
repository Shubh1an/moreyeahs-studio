import { useMediaQuery } from "react-responsive";

export function Themevariant() {
  const isDesktop = useMediaQuery({
    query: "(max-width: 480px)",
  });
  const isLaptop = useMediaQuery({
    query: "(max-width: 1280px) and (min-width: 800px)",
  });
  const imgVariants1 = () => {
    return isDesktop
      ? {
          animate: { x: 10, y: -200, opacity: 1, rotate: [0, 0, -19] },
          initial: { x: -400, opacity: 0 },
        }
      : {
          animate: { x: "1vw", y: "-350px", opacity: 1, rotate: [0, 0, -19] },
          initial: { x: -1000, opacity: 0 },
        };
  };

  const imgVariants2 = () => {
    return isDesktop
      ? {
          initial: { y: 200 },
          animate: { y: 400 },
        }
      : {
          initial: { y: 100 },
          animate: { y: 550 },
        };
  };
  const imgVariants3 = () => {
    return isDesktop
      ? {
          initial: { x: 1000, opacity: 0 },
          animate: { x: 120, y: -250, opacity: 1, rotate: [0, 0, -10] },
        }
      : {
          initial: { x: 1000, opacity: 0 },
          animate: { x: "7vw", y: "-440px", opacity: 1, rotate: [0, 0, -10] },
        };
  };
  const imgVariants4 = (hover) => {
    return isDesktop
      ? {
          initial: { scale: 50 },
          animate: {
            scale: 1,
            y: -10,
            x: -100,
            color: "#FFFFF",
            rotate: [0, 0, -3],
          },
        }
      : {
          initial: { scale: 50 },
          animate: {
            scale: 1,
            y: -200,
            x: -500,
            color: "#FFFFF",
            rotate: [-3, 0, 0, 0],
          },
        };
  };

  const H4Variants = () => {
    return {
      initial: { scale: 0.5 },
      animate: { scale: 1.0 },
      transition: {
        type: "tween",
        duration: "5",
        delay: "1",
      },
    };
  };
  const variant1 = () => {
    return {
      offscreen: {
        y: 500,
      },
      onscreen: {
        y: 100,
        initial: { scale: 0.5 },
        animate: { scale: 1.0 },
        transition: {
          type: "tween",
          bounce: 0.4,
          duration: 0.8,
        },
      },
    };
  };
  const variant2 = () => {
    return {
      offscreen: {
        x: -500,
      },
      onscreen: {
        x: 0,
        y: -50,
        initial: { scale: 0.5 },
        animate: { scale: 1.0 },
        transition: {
          type: "tween",
          bounce: 0.4,
          duration: 0.8,
        },
      },
    };
  };
  const V4 = () => {
    return isLaptop
      ? {
          offscreen: {
            y: 300,
            x: 1000,
            opacity: 0,
          },
          onscreen: {
            x: 1000,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.1,
            },
          },
        }
      : {
          offscreen: {
            y: 300,
            x: 1000,
            opacity: 0,
          },
          onscreen: {
            x: 1398,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.1,
            },
          },
        };
  };
  const Vheadinng1 = () => {
    return isLaptop
      ? {
          offscreen: {
            y: 50,
            opacity: 0,
          },
          onscreen: {
            x: 20,
            y: -60,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.1,
            },
          },
        }
      : {
          offscreen: {
            y: 50,
            opacity: 0,
          },
          onscreen: {
            x: 10,
            y: -60,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.1,
            },
          },
        };
  };
  const Vheadinng2 = () => {
    return isLaptop
      ? {
          offscreen: {
            y: 50,
            opacity: 0,
          },
          onscreen: {
            x: -26,
            y: -240,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.1,
            },
          },
        }
      : {
          offscreen: {
            y: 50,
            opacity: 0,
          },
          onscreen: {
            x: -80,
            y: -240,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.1,
            },
          },
        };
  };
  const Vheadinngnew = () => {
return {
          offscreen: {
            y: 50,
            opacity: 0,
          },
          onscreen: {
            x: -80,
            y: -240,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.1,
            },
          },
        };
  };

  return {
    imgVariants1,
    imgVariants2,
    imgVariants3,
    imgVariants4,
    variant1,
    variant2,
    V4,
    Vheadinng1,
    Vheadinng2,
    H4Variants,
  };
}

export const V1 = () => {
  return {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: -100,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
};
export const V2 = () => {
  return {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      x: 50,
      y: -200,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.1,
      },
    },
  };
};

export const V3 = () => {
  return {
    offscreen: {
      y: 100,
      x: 0,
      opacity: 0,
    },
    onscreen: {
      x: 52,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
};

export const V5 = () => {
  return {
    offscreen: {
      y: 500,
      opacity: 0,
    },
    onscreen: {
      x: 52,
      y: 100,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
};
export const Vblow = () => {
  return {
    offscreen: {
      y: -50,
    },
    onscreen: {
      x: 140,
      y: -120,
    },
  };
};

export const Vheadinng = () => {
  return {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      x: 40,
      y: -150,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.1,
      },
    },
  };
};
export const Vheadinng1 = () => {
  return {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      x: 10,
      y: -60,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.1,
      },
    },
  };
};
export const Vheadinng2 = () => {
  return {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      x: -80,
      y: -240,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.1,
      },
    },
  };
};
