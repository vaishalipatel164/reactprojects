import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { toast } from 'react-toastify';

function Navbar({isloggedIn, setIsLoggedIN}) {
    
  return (
    <>
    <div className='flex justify-evenly'>
        <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading='lazy' />
        </Link>

        <nav>
            <ul className='flex gap-3 '>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* LogIn - SignUp - LogOut - Dashboard */}
        <div className='flex ml-5 mr-3 gap-3'>
             {!isloggedIn && (
            <>
              <Link to="/login">
                <button>Login</button>
              </Link>

              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </>
          )}
             { isloggedIn && (
                <>
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIN(false);
                        toast.success("Logged In");
                    }}>
                        Log Out
                        </button>
                </Link>
             
                <Link to="/dashboard">
                    <button>Dashboard</button>
                </Link>
                </>
            )}
        </div>
    </div>
    </>
  );
}

export default Navbar;