import React, { useState } from "react";

const HookedCarousel = () => {
  const [images, setImages] = useState([
    "https://placeimg.com/1000/500/randoms",
    "https://placeimg.com/1000/500/animal",
    "https://placeimg.com/1000/500/car",
    "https://placeimg.com/1000/500/bike",
    "https://placeimg.com/1000/500/nature",
    "https://placeimg.com/1000/500/snow",
    "https://placeimg.com/1000/500/plane",
    "https://placeimg.com/1000/500/racer",
    "https://placeimg.com/1000/500/cricket",
    "https://placeimg.com/1000/500/randoms",
    "https://placeimg.com/1000/500/randoms",
    "https://placeimg.com/1000/500/randoms",
    "https://placeimg.com/1000/500/randoms"
  ]);

  const [currentImageIdx, setCurrentImagIdx] = useState(0);

  const prevSlide = () => {
    // find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
    const resetToVeryBack = currentImageIdx === 0;

    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    // check if we need to start over from the first index
    const resetIndex = currentImageIdx === images.length - 1;

    const index = resetIndex ? 0 : currentImageIdx + 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  // create a new array with 5 elements from the source images
  const activeImageSourcesFromState = images.slice(
    currentImageIdx,
    currentImageIdx + 5
  );

  // check the length of the new array (it’s less than 5 when index is at the end of the imagge sources array)
  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < 5
      ? // if the imageSourcesToDisplay's length is lower than 5 images than append missing images from the beginning of the original array
        [
          ...activeImageSourcesFromState,
          ...images.slice(0, 5 - activeImageSourcesFromState.length)
        ]
      : activeImageSourcesFromState;

  return (
    <div>
      <button onClick={prevSlide}>Prev</button>
      {/* render images */}
      {imageSourcesToDisplay.map((image, index) => (
        <img key={index} src={image} alt="" style={{ maxWidth: "15%" }} />
      ))}
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default HookedCarousel;
