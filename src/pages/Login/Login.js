import './Login.scss';
import Logo from '../../assets/images/logo admin.png'
import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/context';
import pattern from '../../assets/images/pattern.webp'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import googleIcon from '../../assets/images/google.png'

const Login = () => {

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false)

    const { isHideSidebarAndHeader, setIsHideSidebarAndHeader } = useAppContext();

    useEffect(() => {
        setIsHideSidebarAndHeader(true);
    }, []);

    const focusInput = (index) => {
        setInputIndex(index)
    }
    return (
        <>
            <img src={pattern} className='loginPattern' />
            <section className='loginSection'>
                <div className='loginBox'>
                    <div className='logo text-center'>
                        <img src={Logo} width="60px" />
                        <h5 className='font-weight-bold'>Login to HK_Shop</h5>
                    </div>
                    <div className='wrapper mt-3 card border'>
                        <form>
                            <div className={`form-group position-relative ${inputIndex === 0 && 'focus'}`}>
                                <span className='icon'><MdEmail /></span>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='enter your email'
                                    onFocus={() => focusInput(0)}
                                    onBlur={() => setInputIndex(null)}
                                />
                            </div>

                            <div className={`form-group  position-relative ${inputIndex === 1 && 'focus'}`}>
                                <span className='icon'><RiLockPasswordFill /></span>
                                <input
                                    type={`${isShowPassword === true ? 'text' : 'password'}`}
                                    className='form-control'
                                    placeholder='enter your password'
                                    onFocus={() => focusInput(1)}
                                    onBlur={() => setInputIndex(null)}
                                />
                                <span
                                    className='toggleShowPassword'
                                    onClick={() => setIsShowPassword(!isShowPassword)}
                                >
                                    {isShowPassword === true ? <IoMdEye /> : <IoMdEyeOff />}

                                </span>

                            </div>
                            <div className='form-group'>
                                <Button className="btn-blue btn-lg w-100 btn-big">Sign In</Button>
                            </div>

                            <div className='form-group text-center mb-0'>
                                <Link to={'/forgot-password'} className="link ">FORGOT PASSWORD</Link>
                                <div className='d-flex align-items-center
                                 justify-content-center or mt-3 mb-3'>
                                    <span className='line'></span>
                                    <span className='txt'>or</span>
                                    <span className='line'></span>
                                </div>
                                <Button
                                    variant='outlined'
                                    className='w-100 btn-lg btn-big loginWithGoogle'
                                >
                                    <img src={googleIcon} width="25px" /> &nbsp; Sign In with Google
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div className='wrapper mt-3 card border footer p-3'>
                        <span className='text-center'>
                            Don't have an account?
                            <Link to={'/signUp'} className='link color ml-2'>Register</Link>
                        </span>

                    </div>
                </div>


            </section>
        </>
    )
}

export default Login