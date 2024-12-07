import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import MainSection from "./MainSection";
import AccessDenied from "./AccessDenied";

const AdminMain = ()=>{
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        const {isAdmin} = JSON.parse(localStorage.getItem("user"));
        setIsAdmin(isAdmin);
    },[])

    if(!isAdmin){
        return(
            <AccessDenied/>
        )
    }

    return(
        <div className="bg-[#FAFAFB] flex">
            <Dashboard/>
            <MainSection />
        </div>
    )
}

export default AdminMain;