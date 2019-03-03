import React from 'react';
import './preload-images.css';

/**
 * <PreloadImages /> preloads an array of images and can keep track of loading
 * @param {Array} images A list of image file names
 * @param {String} basePath Base path for all images
 * @param {Function} handleLoad Should fire for each image loaded usiing onLoad
 */

export default ({ images, basePath, handleLoad }) => {
  const loadImages = () => {
    return images.map(f => (
      <img src={basePath + f} onLoad={() => handleLoad()} key={f + f}/>
    ));
  }

  return (
    <div className="preload-images-wrapper">
      { images && loadImages() }
    </div>
  );
}
