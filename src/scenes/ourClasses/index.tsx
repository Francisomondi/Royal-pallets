import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.jpg";

//import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.webp";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "TV CABINETS",
    description:
      "Our TV cabinets are tailored to fit the client's specific requirements, taking into consideration the available space, desired style, and functional needs.",
    image: image1,
  },
  {
    name: "BEDROOM FURNITURE",
    description:
    "Quality Bedroom Furniture tailored to fit the available space, desired style, and functional needs, allowing for a highly personalized and cohesive bedroom design. ",
    image: image4,
  },
  {
    name: "SOFAS",
    description:
"Sofas are a fundamental piece of furniture that provides comfortable seating and serves as a focal point in living rooms, lounges, or other gathering spaces. " ,
  image: image3,
  },
  {
    name: "DINNING SETS",
    description:
      "Dining tables come in various styles, shapes, and sizes to suit different preferences and space requirements, They provide a designated space for meals and gatherings, combining functionality with aesthetic appeal. ",
    image: image4,
  },
  {
    name: "STUDY DESKS",
    description:
    "Study desks designed for studying, working, or engaging in other tasks that require a dedicated workspace. Our designs provide a comfortable and organized area for individuals to focus on their academic or professional pursuits. ",
    image: image5,
  },
  {
    name: "COFFEE TABLE",
    description:
      "Coffee tables come in a wide range of designs, styles, and materials to suit different aesthetics and interior decor. We do custom designs that come in  various shapes and feature different leg styles, including straight, tapered, or curved. Popular design styles include modern, contemporary, traditional, rustic, industrial, and mid-century modern.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR ITEMS</HText>
            <p className="py-5">
              At Royal Pallets we provide a variety of products ranging from Bedroom Furniture,
              Living room sofas, Coffe tables, Stools, Console tables, TV Cabinets,Dinning sets, Stools,
              Kitchen Carbinets among others
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
