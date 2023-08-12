import { Link } from "react-router-dom";


const Navbar = () => {

    const navItems = (
        <>
            <li className="text-white"><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-2xl rounded-2xl p-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case lg:text-xl sm:text-sm">E-commerce</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            {/* {user ? (
                <div className="navbar-end">
                    {userData && (
                        <span className="text-slate-900 mr-2">
                            Welcome, <Link to="/profile">{userData.name}</Link>
                        </span>
                    )}
                    <button onClick={handleLogout} className="btn btn-neutral">
                        Logout
                    </button>
                </div>
            ) : (
                <div className="navbar-end">
                    <button className="btn">
                        <Link to="/login">Login</Link>
                    </button>
                </div>
            )} */}
        </div>
    );
};

export default Navbar;