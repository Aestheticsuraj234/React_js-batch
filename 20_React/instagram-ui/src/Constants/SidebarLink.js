import { MdOutlineExplore } from "react-icons/md";

const { FaRegHeart, FaFacebookMessenger, FaSearch } = require("react-icons/fa");
const { IoHome, IoSearch } = require("react-icons/io5");

export const SIDEBARLINKS = [
    {
        title:"Home",
        icon:<IoHome size={26} />,
    },
    {
        title:"Search",
        icon:<FaSearch size={26} />,
    },
    {
        title:"Explore",
        icon:<MdOutlineExplore size={26} />,
    },
    {
        title:"Notification",
        icon:<FaRegHeart size={26} />,
    },
    {
        title:"Messages",
        icon:<FaFacebookMessenger size={26} />,
    },
    {
        title:"Profile",
        icon:<img src="https://avatar.iran.liara.run/public/38" height={30} width={30} alt="Avatar"/>
    }
   
]