import * as React from "react";
import { motion } from "motion/react";
import { OwnerImg } from "../../assets";
import { slideIn } from "../../utils/motion";

export const Owner = () => {
  return (
    <section className="w-full px-4  max-md:px-3 font-medium">
      <div className="flex justify-evenly lg:flex-row flex-col gap-10 lg:px-20 px-8">
        <motion.div
          variants={slideIn("left", "tween", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="lg:flex-[0.95]  flex bg-black-100 lg:p-8 rounded-2xl "
        >
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8">
            <div className="flex-1 min-w-[280px] max-w-[600px]">
              <h2 className="text-blue-600 text-xl mb-1 text-center md:text-left">
                The Founder
              </h2>
              <h3 className="text-black text-2xl font-semibold mb-3 text-center md:text-left">
                The Heart Behind the Hills
              </h3>
              <p className="text-gray-600 text-lg leading-6 text-justify">
                At the helm of Blue Hill Tea Factory is{" "}
                <strong>Mr. Chaminda</strong>, a passionate tea enthusiast whose
                journey is deeply entwined with the rich heritage of Sri Lankan
                tea. Growing up amidst the scenic tea gardens, he developed an
                early appreciation for the art of tea cultivation and the hard
                work behind every harvest.
                <br />
                <br />
                Inspired by both tradition and the evolving demands of modern
                tea lovers,
                <strong> Mr. Chaminda</strong> envisioned a space where
                authentic craftsmanship meets sustainable innovation.
                <br />
                <br />
                Under his leadership, Blue Hill has grown into a respected name
                in the tea industry, recognized for ethical practices, community
                empowerment, and premium-quality blends.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="min-h-50  lg:max-w-[40%] w-full pt-13"
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            src={OwnerImg}
            alt="Founder of Blue Hill Tea Factory"
            className="w-full h-auto object-cover rounded-lg min-w-[280px] max-w-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
};
