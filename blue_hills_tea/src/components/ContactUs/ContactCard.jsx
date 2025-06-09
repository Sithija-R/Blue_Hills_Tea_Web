import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ContactCard = () => {
  const handleOpenMap = () => {
    const mapUrl =
      "https://www.google.com/maps/place/Blue+Mount+Tea+Factory/@6.7053856,80.6822117,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae38c564f4958fb:0xc4955dd7036cad65!8m2!3d6.7053856!4d80.684792!16s%2Fg%2F11r8jw7v4!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D";

    window.open(mapUrl, "_blank");
  };

  return (
    <div className="w-full flex flex-col px-4 md:px-12 py-12">
      <h2 className="text-5xl font-bold mb-6 text-left">Contact Us</h2>
      <p className="text-3xl text-[#4B5563]">
        We’d love to hear from you. Whether you have questions about our teas,
        wholesale inquiries, or feedback, our team is here to help.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center lg:gap-20 md:gap-10 gap-8 mt-25">
        <motion.div className="relative  bg-[#2563EB1C] backdrop-blur-lg p-6 rounded-xl shadow-md w-full md:w-1/3 min-h-80 text-left  transform transition-all duration-200 hover:scale-105">
          <div className="text-3xl text-blue-500  mx-auto mb-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Visit Our Factory</h3>
          <p className="text-lg text-[#4B5563] overflow-hidden text-ellipsis whitespace-nowrap">
            Blue Hills Tea Factory,
            <br />
            Bogawanthalawa Road,
            <br />
            Balangoda
          </p>

          <motion.button
            onClick={handleOpenMap}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-8 mt-10.5 bg-[#2563EB40] hover:bg-blue-600 hover:text-white text-[#2563EB] py-2 px-4 rounded-xl text-lg cursor-pointer"
          >
            Get Directions
          </motion.button>
        </motion.div>

        <motion.div className="relative  bg-[#2563EB1C] backdrop-blur-lg p-6 rounded-xl shadow-md w-full md:w-1/3 min-h-80 text-left  transform transition-all duration-200 hover:scale-105">
          <div className="text-3xl text-blue-500 mx-auto mb-4">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
          <p className="text-lg text-[#4B5563] overflow-hidden text-ellipsis whitespace-nowrap">
            Contact : +94 77 355 1946
          </p>

          <a href="tel:+94773551946">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-8 mt-10.5 bg-[#2563EB40] hover:bg-blue-600 hover:text-white text-[#2563EB] py-2 px-4 rounded-xl text-lg cursor-pointer"
            >
              Call Now
            </motion.button>
          </a>
        </motion.div>

        <motion.div className="bg-[#2563EB1C]  backdrop-blur-lg p-6 rounded-xl shadow-md w-full md:w-1/3 min-h-80 text-left  transform transition-all duration-200 hover:scale-105">
          <div className="text-3xl text-blue-500 mx-auto mb-4">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Opening Hours</h3>
          <p className="text-lg text-[#4B5563] overflow-hidden text-ellipsis whitespace-nowrap">
            <strong>Office : </strong>
            Monday - Friday: 8am - 5pm
            <br />
            <strong>Factory : </strong>
            Open every day, 24 hours
            <br />
            (Except special holidays)
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactCard;
