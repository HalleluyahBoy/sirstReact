function autoSlide(setImageSource) {
  const images = [happy, logo];
  let i = 0;
  setInterval(function () {
    if (i === images.length) {
      i = 0;
    }
    setImageSource(images[i]);
    i++;
  }, 3000);
}

const useImageSlider = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return {
    currentIndex,
    handleImageClick,
  };
};

const ImageSlider = ({ images }) => {
  const { currentIndex, handleImageClick } = useImageSlider(images);

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ maxWidth: "100%", height: "auto" }}
        onClick={handleImageClick}
      />
    </div>
  );
};

const AnotherComponent = () => {
  const otherImages = [
    "https://example.com/valid-image-url.jpg",
    "https://example.com/another-image2.jpg",
    "https://example.com/another-image3.jpg",
  ];

  const { currentIndex, handleImageClick } = useImageSlider(otherImages);

  return (
    <div>
      <h2>Another Component</h2>
      <img
        src={otherImages[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ maxWidth: "100%", height: "auto" }}
        onClick={handleImageClick}
      />
    </div>
  );
};
