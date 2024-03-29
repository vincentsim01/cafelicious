import React,{useState,useEffect} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import './Header.css';

const url = "http://localhost:5001"


const Header2 = () => {

    const [userData,setUserData] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        if(sessionStorage.getItem('ltk') != null){
            fetch(`${url}/api/auth/userInfo`,{
                method:'GET',
                headers:{
                    'x-access-token':sessionStorage.getItem('ltk')
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data)

            })
        }
    },[])


    const handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userInfo');
        setUserData('');
        navigate('/')
    }



    const conditionalHeader = () => {
        if(userData){

            if(userData.name){
                            // console.log(userData.name);
                sessionStorage.setItem('userInfo',JSON.stringify(userData))
                return(
                    <>
                        <Link to="/register" className='btn btn-primary'>
                            <span className="glyphicon glyphicon-user"></span> Hi {userData.name}
                        </Link> &nbsp;
                        <button onClick={handleLogout} className='btn btn-success'>
                            <span className="glyphicon glyphicon-log-out"></span> Logout
                        </button>
                    </>
                )
            }
        }else{
            return(
                <>
                    <Link to="/register" className='btn btn-primary'>
                        <span className="glyphicon glyphicon-user"></span> SignUp
                    </Link> &nbsp;
                    <Link to="/login" className='btn btn-success'>
                        <span className="glyphicon glyphicon-log-in"></span> Login
                    </Link>
                </>
            )
        }
    }

    function blackbg(){
        document.body.classList.toggle("darkbg");
        
    }

    return(
        <header>
            {/* <div id="brand">
                Developer Funnel
            </div> */}
            <span id="menu">
            <Link to="/" className="menumenu">Home</Link>
            <Link to="/about" className="menumenu">About Us</Link>
            <Link to="/contact" className="menumenu">Contact Us</Link>
            {/* <button className="buttonld" onClick={blackbg}>Light Dark</button> */}
            </span>
            <span className="buttonldcontainer">
            <button className="buttonld" onClick={blackbg}>Light Dark</button>
            </span>
            <div id="social">
                {conditionalHeader()}
            </div>
        </header>
    )
}

export default Header2;