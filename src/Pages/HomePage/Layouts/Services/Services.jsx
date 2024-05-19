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
      caption: "Quality Welding Services for Your Projects",
      description:
        "Discover our expert welding services tailored to meet your project needs. From fabrication to repairs, we deliver quality craftsmanship.",
    },
    {
      src: Manu,
      alt: "Second slide",
      caption: "Transform Your Vision into Reality",
      description:
        "Bring your ideas to life with our precision welding solutions. We specialize in turning your concepts into beautifully crafted metalwork.",
    },
    {
      src: Manu2,
      alt: "Third slide",
      caption: "Reliable Welding Solutions You Can Trust",
      description:
        "Partner with us for reliable and efficient welding services. With years of experience, we guarantee exceptional results for every project.",
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
