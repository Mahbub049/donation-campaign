import { NavLink } from "react-router-dom";

const Navbar = () => {
    const lists = 
    <div className="flex gap-8">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/donation'}>Donation</NavLink>
        <NavLink to={'/stats'}>Statistics</NavLink>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        <img src="../../../public/Resources/Logo.png" alt="" />
                    </a>
                </div>
                <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;