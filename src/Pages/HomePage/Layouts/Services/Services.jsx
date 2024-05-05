// Services.jsx
import React from "react";
import Carousel from "../../../../Components/Carousel/Carousel.jsx";
import reclaimed from "../../../../assets/netfast.webp";
import Manu from "../../../../assets/refound.webp";
import Manu2 from "../../../../assets/manu2.jpg";

const Services = () => {
  const images = [
    {
      src: reclaimed,
      alt: "First slide",
      caption: "First slide label",
      description:
        "Some representative placeholder content for the first slide.",
    },
    {
      src: Manu,
      alt: "Second slide",
      caption: "Second slide label",
      description:
        "Some representative placeholder content for the second slide.",
    },
    {
      src: Manu2,
      alt: "Third slide",
      caption: "Third slide label",
      description:
        "Some representative placeholder content for the third slide.",
    },
  ];

  return (
    <div>
      <Carousel images={images} />
      {/* Add other content */}
    </div>
  );
};

export default Services;
