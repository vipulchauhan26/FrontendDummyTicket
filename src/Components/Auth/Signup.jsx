import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "../Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import useSignup from "../../utils/useSignup";

const Signup = () => {
    const { signup, loading, error, success, setSuccess, setError } = useSignup();
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        phone:"",
        password: ""
    })

    const handleFormData = (e) => {
        setFormData((preVal) => ({ 
            ...preVal,
            [e.target.name]: e.target.value
        }))
    }
    const handleSignup = () => {
        if (!formData.username || !formData.email || !formData.password || !formData.password) {
            console.log(formData);
            alert("Please Provide all details");
            return;
        }
        else {
            signup(formData);
        }
    }
    useEffect(() => {
        if(success){
            toast.success("Signup Successfully");
            setSuccess(false);
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
                <div className="h-[100vh] ">
                    <div className="flex  justify-center p-14 ">
                        <div className="login-container w-96 border border-white py-[30px] px-[20px] bg-white rounded-md shadow-2xl shadow-slate-900">
                            <span className=" font-bold text-3xl text-center block mb-[15px]">Signup</span>
                            <div className="text-field-container flex flex-col">
                                <input type="text" name="username" placeholder="username" className="border mb-[10px] border-black bg-white rounded-md p-[6px] outline-none" onChange={handleFormData} value={formData.username} required />
                                <input type="text" name="email" placeholder="example@example.com" className="mb-[10px] border border-black bg-white  rounded-md p-[6px] outline-none" onChange={handleFormData} value={formData.email} required />
                                <input type="text" name="phone" className="mb-[10px] border border-black bg-white  rounded-md p-[6px] outline-none" placeholder="+91 9999999999" onChange={handleFormData} value={formData.phone} required />
                                <input type="password" name="password" className="border border-black bg-white  rounded-md p-[6px] outline-none" placeholder="password" onChange={handleFormData} value={formData.password} required />
                            </div>
                            <div className="flex justify-between mt-[15px]">
                                <span>Already have an Account !</span>
                                <Link to="/login"><span className=" cursor-pointer">Login</span></Link>
                            </div>
                            <button onClick={handleSignup} className="text-lg bg-[#ec601d] rounded-md px-[10px] py-[5px] w-full">
                            {loading ? "Loading...":"Signup"}
                            </button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
            
        </div>
    )
}

export default Signup;