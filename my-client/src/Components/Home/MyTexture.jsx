export const myTexture = (texture, height, bgColor) => {
  return {
    backgroundImage: `url(${texture})`,
    height: height,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: bgColor,
  };
};
