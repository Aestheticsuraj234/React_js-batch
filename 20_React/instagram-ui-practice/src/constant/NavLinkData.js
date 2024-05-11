import { FaRegHeart, FaSearch } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

export const NAV_LINKS_DATA = [
    {
        Name: "Home",
        icon: <IoHome size={30} />,
    },
    {
        Name: "Search",
        icon: <FaSearch size={30} />,
    },
    {
        Name: "Explore",
        icon: <MdOutlineExplore size={30} />,
    },

    {
        Name: "Notification",
        icon: <FaRegHeart size={30} />,
    }, 
    {
        Name: "Message",
        icon: <RiMessengerLine size={30} />,
    },
    {
        Name: "Profile",
        icon: <img src="https://avatar.iran.liara.run/public/38" height={30} width={30} alt="Avatar"/>,
    },
]