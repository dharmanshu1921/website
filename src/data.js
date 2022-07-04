//import heroblock assets

//import teams assets
import AkshayMunjal from "./assets/akshay_munjal.jpg";
import ManojArora from "./assets/manoj_arora.jpg";
import AbhaySharma from "./assets/abhay_sharma.jpg";
import DavinderSingh from "./assets/davinder_sir_img.png";
import DeepakPandit from "./assets/deepak_pandit.jpg";

//import benefits icons
import { BiSupport } from "react-icons/bi";
import { GiHouse, GiChemicalDrop, GiReceiveMoney } from "react-icons/gi";
import { AiTwotoneLike } from "react-icons/ai";
import { FaUserTie, FaIndustry } from "react-icons/fa";

//export hero block data
export const heroData = [
  {
    src: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "quote",
  },
  {
    src: "https://images.unsplash.com/photo-1634936016780-65f6a77ebdd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80",
    alt: "build,ship,scale.",
  },
  {
    src: "https://images.unsplash.com/photo-1417816491410-d61e1546e539?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    alt: "garage startup",
  },
];

//export teams section data
export const team = [
  {
    name: "Mr. Akshay Munjal",
    position: "Board Member",
    organisation: "ACIC BMU Foundation",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    src: AkshayMunjal,
    alt: "Akshay Munjal",
  },
  {
    name: "Dr. Manoj Arora",
    position: "Board Member",
    organisation: "ACIC BMU Foundation",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    src: ManojArora,
    alt: "Dr. Manoj Arora",
  },
  {
    name: "Mr. Abhay Sharma",
    position: "Board Member",
    organisation: "ACIC BMU Foundation",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    src: AbhaySharma,
    alt: "Mr. Abhay Sharma",
  },
  {
    name: "Mr. Davinder Singh",
    position: "CEO",
    organisation: "ACIC BMU Foundation",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    src: DavinderSingh,
    alt: "Mr. Davinder Singh",
  },
  {
    name: "Mr. Srinath",
    position: "Coordinator",
    organisation: "ACIC BMU Foundation",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    src: DeepakPandit,
    alt: "Mr. Srinath",
  },
  {
    name: "Dr. Deepak Pandit",
    position: "Chair Professor, I2E",
    organisation: "BML Munjal University",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    src: DeepakPandit,
    alt: "Dr. Deepak Pandit",
  },
];

//import benefits data
export const benefits = [
  {
    icon: <GiHouse size={30} className="text-orange-500"></GiHouse>,
    names: "Tinkering Space",
    text: "Facilitates the innovators/startups to use Tinkering and Maker Spaces available on BML Munjal University’s campus to develop their prototypes and products.",
  },
  {
    icon: <AiTwotoneLike size={30} className="text-orange-500"></AiTwotoneLike>,
    names: "Physical Facilities",
    text: "Furnished office space- coworking and cabin options are available; personal computers (CYOD), telecom facility, internet connectivity, multi-function printer, conference room equipped with projection and tele-presence facilities along with pantry and library resources.",
  },
  {
    icon: <BiSupport size={30} className="text-orange-500"></BiSupport>,
    names: "Technical Support",
    text: "Helps innovators/startups in the areas of legal services including - IP Protection, patent filing, registration of trademarks, and copyrights etc. along with support in accounting and company secretarial services.",
  },
  {
    icon: (
      <GiChemicalDrop size={30} className="text-orange-500"></GiChemicalDrop>
    ),
    names: "Labs & Workshops ",
    text: "Facilitates the incubatee innovators/startups to access the laboratories and other resources of the university for their development purposes. Incubatees can perform development-related activities at the laboratories.",
  },
  {
    icon: <FaUserTie size={30} className="text-orange-500"></FaUserTie>,
    names: "Experts & Mentors",
    text: "Facilitates access to experts and mentors from various functional domains and diverse industries. This is to enable the innovators/startups to seek inputs and advice on their ventures and the challenges being faced. ",
  },
  {
    icon: (
      <GiReceiveMoney size={30} className="text-orange-500"></GiReceiveMoney>
    ),
    names: "Fund Raising",
    text: "Facilitates applications for grants from government bodies or corporate venture entities. May also consider providing grant, seed fund/ soft loan subject to the availability of funds/ grants/ schemes meant for the same. The startups will be supported through connections with potential investors for fundraising.",
  },
  {
    icon: <FaIndustry size={30} className="text-orange-500"></FaIndustry>,
    names: "Industry Connect",
    text: "Meetings of innovators/startups with leaders from industries are organised regularly by ACIC-BMU. Connect with ecosystem players like Investors, successful entrepreneurs, service providers is provided to the startups.",
  },
];
