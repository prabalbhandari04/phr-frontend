import React from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import axios from 'axios'


const ListItems = styled.li`
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: ${props => props.color || '#000'};
    cursor: pointer;
    text-transform: uppercase;
`

const Line = styled.div`
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #50CB93;
    transition: 0.5s all ease-in-out;
`
const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    &:hover ${Line} {
        width: 80%;
    }
`

const NavItems = ({ item, linkTo, color }) => (
    <Container>
        <ListItems color={color}><Link to={linkTo}>{item}</Link></ListItems>
        <Line />
    </Container>
)

const Navbar = () => {
    // Active tab
    let location = useLocation();
    let currentLocation = location.pathname;

    const auth = useSelector(state => state.auth)
    const {user, isLogged} = auth

    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const userLink = () => {
        return (
        

            <div className='hidden lg:flex gap-x-2 items-center'>
                <h2 className='text-base font-bold text-black cursor-pointer'><Link to='/profile/patient'>{user.name +"'s Profile"}</Link></h2>
                <div className='w-2 h-4 bg-primary'/>
                <h2 onClick={handleLogout} className='text-base font-bold text-black cursor-pointer'><Link to='/'>Logout</Link></h2>
            </div>
          
        
        
        
        )
    }

    

    const getActive = (curr) => {
        if(currentLocation ===  curr) {
            return "#50CB93";
        }
    }

    let navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/')
    }

    return (
        <nav className='flex w-full h-16 bg-white px-8 xl:px-0 justify-between items-center sticky top-0 z-50'>
            <div className='w-16 h-auto flex justify-center items-center'>
                <h1 className='font-[Symbol] text-2xl cursor-pointer' onClick={handleNavigate}>Ayuh</h1>
            </div>

            <div className='hidden lg:flex'>
                <ul className='flex justify-center items-center gap-x-8'>
                    <NavItems item='Home' linkTo="/" color={getActive('/')}/>
                    <NavItems item='Clinics' linkTo="/clinics" color={getActive('/clinics')}/>
                    <NavItems item='Doctors' linkTo="/doctors" color={getActive('/doctors')}/>
                    <NavItems item='About' linkTo="/about" color={getActive('/about')} />
                </ul>
            </div>

            <div className='hidden lg:flex gap-x-2 items-center'>
                
                {
                    isLogged
                    ? userLink()
                    :<h2 className='text-base font-bold text-black cursor-pointer'><Link to='/login'>Login</Link></h2>    
                            }
            </div>

            <div className='flex flex-col items -end gap-y-2 lg:hidden'>
                <div className='w-4 h-[1px] bg-black' />
                <div className='w-3 h-[1px] bg-black' />
                <div className='w-2 h-[1px] bg-black' />
            </div>
        </nav>
    )
}

export default Navbar