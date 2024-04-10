import { useRef, useState } from "react";
import "./App.css";
import Button from "./Button";
import pfp from "./assets/pfp.webp";
import { AiOutlineShareAlt, AiOutlineCodepen } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiSolidChevronDown } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const slideInFromBottom = {
  hidden: {
    opacity: 0,
    y: 100, // Start from 100px below its normal position
  },
  visible: {
    opacity: 1,
    y: 0, // Return to its normal position
    transition: {
      duration: 0.5, // Animation duration
      ease: "easeOut", // Easing function for a smooth effect
    },
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5, // Animation duration
      ease: "easeOut", // Easing function for a smooth effect
    },
  },
};

function App() {
  const [formVisible, setFormVisible] = useState(false); // Initialize form visibility state

  const formToggle = () => {
    setFormVisible(!formVisible); // Toggle form visibility
  };
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setLoading(true);

      emailjs
        .send(
          "service_au6hpde",
          "template_0r138zy",
          {
            from_name: form.name,
            to_name: "Varad",
            from_email: form.email,
            to_email: "varadapatil123@gmail.com",
            message: form.message,
          },
          "gPSVXRIE5XamWG-UM"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something Went Wrong!!!");
          }
        );
    }
  };

  const toggleShare = async () => {
    try {
      // Check if the Web Share API is available in the browser
      if (navigator.share) {
        // Prepare the data to share (in this case, a link)
        const shareData = {
          title: "Varad | Web Developer",
          text: "Check out My Project at :",
          url: "https://varad-dev-showcase.web.app",
        };

        // Call the share method to open the share menu
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that don't support the Web Share API
        alert("Web Share API is not supported in your browser.");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once when it comes into view
    threshold: 0.2, // Trigger the animation when 20% of the element is in view
  });
  return (
    <div className="w-full flex justify-center py-5 px-20 items-center h-full bg-gradient-to-tr from-red-500 to-yellow-500 xs:px-5 xs:py-0">
      <div className="flex justify-start items-start w-[50%] py-10 px-20 xs:px-0 h-full xs:w-full flex-col gap-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex justify-between w-full items-center gap-5"
        >
          <div className="flex gap-4">
            <div className="flex justify-center items-center w-20 h-20 rounded-full overflow-hidden shadow-xl border-2 border-zinc-700">
              <img
                src={pfp}
                alt="profile img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center items-start flex-col">
              <p className="text-xl font-bold tracking-wide">Varad Patil</p>
              <p className="text-lg font-semibold text-slate-700 xs:text-base">
                Web Developer
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span
              className="rounded-full p-1 bg-slate-200 flex justify-center items-center text-black cursor-pointer"
              onClick={toggleShare}
            >
              <AiOutlineShareAlt fontSize={26} />
            </span>
            <a
              href="https://www.linkedin.com/in/varad-patil-web-dev/"
              target="_blank"
            >
              <BsLinkedin fontSize={26} className=" text-blue-700" />
            </a>
          </div>
        </motion.div>
        <div className="flex justify-center items-center w-full gap-5 flex-col">
          <a href="https://varadportfolio.web.app/" target="_blank">
            <motion.button
              initial="hidden"
              animate="visible"
              variants={slideInFromBottom}
              className="custombtn"
            >
              <span className="custombtn_top flex flex-col">
                <p className="text-left">About Me</p>
                <p className="font-medium text-base text-zinc-700 text-justify">
                  {" "}
                  I am a skilled and passionate web developer proficient in a
                  wide range of technologies and programming languages. From
                  HTML, CSS, and JavaScript to popular frameworks like React,
                  Angular, and Vue.js, I have the expertise to create innovative
                  and user-friendly online experiences.
                  <br />
                  <span className="text-violet-700">
                    Want to find out more? Visit my portfolio by cliking Here
                  </span>
                </p>
              </span>
            </motion.button>
          </a>
          <h1 className="text-lg font-semibold uppercase flex justify-center items-center w-full">
            <div className="w-[25%] h-[2px] bg-black"/>
            <div className="flex justify-center items-center text-center w-[50%]">
             My Projects 
            </div>
            <div className="w-[25%] h-[2px] bg-black"/>
          </h1>
          <p className="text-sm text-slate-700 text-center">*Click on any project to go live*</p>
          <Button
            text="Latest Project : Spotify Clone"
            description="A FullStack clone of spotify with stripe subscription and user auth build with Next.js"
            link="https://spotify-2-o.vercel.app/"
            isSpecial
          />
          <Button
            text="Snikrz : Ecommerce Shoe Store"
            description="A FullStack ecommerce shoe store website made with MERN stack"
            link="http://snikrz.web.app/"
            isSpecial2
          />
          <Button
            text="3D Portfolio Website"
            description="A 3D Portfolio website made with Three.js and React"
            link="https://varad-dev-island.vercel.app/"
            isSpecial2
          />
          <Button
            text="Threads : Social Media Platform"
            description="A full stack nextjs based social media platform to post your ideas with clerk authentication"
            link="https://threads-app-sooty.vercel.app/"
          />
          <Button
            text="Organizify : Trello Clone"
            description="Your all-in-one task organizer powered by Next.js and OpenAI"
            link="https://organizify-by-varad-ass8e66kb-devvaradpatil.vercel.app/"
          />
          <Button
            text="Plantsnap"
            description="Your ultimate plant identification companion! powered by PlantNet API"
            link="https://plantsnap.web.app/"
          />
          <Button
            text="Gericht Restaurant"
            description="The most elegant design with a beautiful UI."
            link="https://gericht-restaurant-by-varad.web.app/"
          />
          <Button
            text="Bubble Byte"
            description="A website for innovative ed-tech startup"
            link="https://bubblebyte.in/"
          />
          <Button
            text="Nalanda Pre-school"
            description="A detailed Pre-school website for Naland Pre-school"
            link="https://nalandainfo.com/"
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <motion.div
            ref={ref}
            initial={inView ? "hidden" : "visible"} // Initially hidden if in view, otherwise visible
            animate={inView ? "visible" : "hidden"} // Animate if in view, otherwise hidden
            variants={slideInFromBottom}
            className="custombtn w-full"
          >
            <span className="custombtn_top flex flex-col">
              <p className="text-left flex justify-between items-center">
                Contact Me
                <div className="flex justify-center items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/varad-patil-web-dev/"
                    target="_blank"
                  >
                    <BsLinkedin fontSize={20} className="text-blue-700" />
                  </a>
                  <a href="https://github.com/DevVaradPatil" target="_blank">
                    <BsGithub fontSize={20} className="text-black" />
                  </a>
                  <a href="https://codepen.io/varadPatil" target="_blank">
                    <AiOutlineCodepen fontSize={22} className="text-black" />
                  </a>
                </div>
              </p>
              <div className="text-left font-medium text-base text-zinc-700">
                <p
                  className="mt-3 flex justify-between items-center"
                  onClick={formToggle}
                >
                  Leave a Message{" "}
                  <span className="pr-5">
                    <BiSolidChevronDown
                      fontSize={24}
                      className={`transition-all duration-300 ${
                        formVisible ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </p>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className={`mt-5 flex flex-col gap-8 ${
                    formVisible ? "" : "hidden"
                  }`}
                >
                  <label className="flex flex-col">
                    <span className="text-black font-medium mb-4">
                      Your Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your good name?"
                      className="bg-slate-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-black font-medium mb-4">
                      Your Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your email address?"
                      className="bg-slate-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-black font-medium mb-4">
                      Your Message
                    </span>
                    <textarea
                      rows="7"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What do you want to say?"
                      className="bg-slate-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
                    />
                  </label>
                  <button
                    type="submit"
                    className="bg-slate-300 w-full mb-2 py-3 px-8 otuline-none text-gray text-[20px] font-bold shadow-md shadow-primary rounded-xl hover:bg-primary hover:text-black transition"
                  >
                    {loading ? "Sending..." : "SEND"}
                  </button>
                </form>
              </div>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
