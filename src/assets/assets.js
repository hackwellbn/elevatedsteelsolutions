import { Link } from "react-router-dom";
import image1 from "./image1.jpg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpg";


export const assets = [
  {
    image: image1,
    title: "Image 4",
    description: "This is the fourth image in the gallery.",
  },
];

export const ServicesData =[{
    title: "Transforming Steel into Solutions",
    description: "Discover how our welding services can enhance your projects with durability and style.",
    image: image1,
    heading: 'Precision. Quality. Reliability.',
    Link: '/services'
    
  }, { 
  title: "Tailored Solutions for Every Need",
  description: "From custom fabrications to repairs, we offer a range of services to suit your requirements.",
  image: image2,
  heading: 'Your Vision, Our Expertise',
  Link: '/#contact'
  },{
    title: "Innovative Welding Techniques",
    description: "We utilize the latest technology and methods to deliver superior results for every project.",
    image: image3,
    heading:'Quality You Can Count On.',
    Link: '/featuredprojects'
  }
]