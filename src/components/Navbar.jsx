import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import "./Navbar.css"

function Navbar() {
    const menuItems = [<IoHomeOutline className="icon" />
                        , <MdOutlineAccountCircle className="icon"/>
                        , <MdComputer className="icon"/>
                        , <AiOutlineProject className="icon"/>
                        , <MdOutlineEmail className="icon"/>
    ]
        return (
                
            <nav className="nav-bar">
                <ul>
                    {menuItems.map((item) => (
                    <li key={item}>{item}</li>
                    ))}
                </ul>
            </nav>
        );
    }

export default Navbar;