import axios from "axios";
import { useState } from "react";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const login = async (userData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        console.log(userData);

        try {
            const response = await axios.post('http://localhost:8080/api/login', userData);
            // Assuming the response contains a token
            const { token, ...rest } = response.data;
            
            // Save token and any other necessary data in local storage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(rest));

            setSuccess(true);
            // You can also return response data or handle it as needed
        } catch (err) {
            console.log(err);
            setError(err.response?.data?.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error, success, setSuccess, setError };
};

export default useLogin;
