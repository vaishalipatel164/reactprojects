import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { toast } from 'react-toastify';

function Navbar(props) {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    
  return (
    <>
    <div className='flex justify-between items-center w-11/12 max-w-290 py-4 mx-auto'>
        <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading='lazy' />
        </Link>

        <nav >
            <ul className='text-white flex gap-x-6'>
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
        <div className='flex items-center gap-x-4'>
             {!isLoggedIn && 
              <Link to="/login">
                <button className='bg-gray-800 text-white py-2 px-3 rounded-lg border border-gray-700'>
                    Login
                    </button>
              </Link>
          }
{!isLoggedIn && (
  <Link to="/signup">
    <button className='bg-gray-800 text-white py-2 px-3 rounded-lg border border-gray-700'>
      Sign Up
    </button>
  </Link>
)}
             { isLoggedIn && 
               
                <Link to="/">
                    <button className='bg-gray-800 text-white py-2 px-3 rounded-lg border border-gray-700'
                    onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                        
                    }}>
                        Log Out
                        </button>
                </Link>
            }
            {  isLoggedIn && 
                <Link to="/dashboard">
                    <button className='bg-gray-800 text-white py-2 px-3 rounded-lg border border-gray-700'
                    >Dashboard</button>
                </Link>
               
            }
        </div>
    </div>
    </>
  );
}

export default Navbar;