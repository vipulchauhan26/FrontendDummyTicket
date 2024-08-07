import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "../Footer/Footer";
import useLogin from "../../utils/useLogin";

const Login = () => {
    const { login, loading, error, success, setSuccess, setError } = useLogin();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleFormData = (e) => {
        setFormData((preVal) => ({
            ...preVal,
            [e.target.name]: e.target.value
        }))
    }
    const handleLogin = () => {
        if (!formData.email || !formData.password) {
            alert("Please Provide All Details");
            return;
        } else {
            login(formData);
        }
    }
    useEffect(() => {
        if(success){
            toast.success("Signup Successfully");
            setSuccess(false);
            navigate("/")
        }
    }, [success]);

    useEffect(() => {
        if(error){
            console.log(error);
            toast.error(error);
            setError(null);
        }
    }, [error]);
    return (
        <div className="h-[100vh] bg-gradient-to-r from-white from-67% to-green-100 to-33%">
            <div>
                <div className="flex justify-center p-14 ">
                    <div className="login-container w-96 border  py-[30px] px-[20px] bg-white rounded-md shadow-2xl shadow-slate-900">
                        <span className=" font-bold text-3xl text-center block mb-[15px]">Login</span>
                        <div className="text-field-container flex flex-col">
                            <input type="text" name="email" placeholder="example@example.com" className="mb-[10px] border border-black bg-white  rounded-md p-[6px] outline-none" onChange={handleFormData} value={formData.email} required />
                            <input type="password" name="password" className="border border-black bg-white  rounded-md p-[6px] outline-none" placeholder="password" onChange={handleFormData} value={formData.password} required />
                        </div>
                        <div className="flex justify-between mt-[15px]">
                            <span>Don't have an account!</span>
                            <Link to="/signup"><span className=" cursor-pointer">Signup</span></Link>
                        </div>
                        <button className="text-lg bg-[#ec601d] rounded-md px-[10px] py-[5px] w-full" onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login;