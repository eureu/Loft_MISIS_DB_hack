import { useEffect, useState } from "react";
import SidebarNav from "../SidebarNav/SidebarNav";
import SidebarSupport from "./SidebarAdmin/SidebarAdmin";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";
import Search from "../Header/Search/Search";
import TasksList from "./Task/TasksList";
import axios from "axios";
import { DefaultStroke } from "./Task/Task";
import { Filter, LargeFilter } from "./Components";
import { SERVER_URL } from "../../constants";
import './AdminPage.css'

const AdminPage = () => {
    const [isOpen, setIsOpen]= useState<Boolean>(false);
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        if(localStorage.getItem('access_token') !== 'undefined' && localStorage.getItem('access_token') !== null) {
            axios.get(`${SERVER_URL}/asker/list`,{
                headers: {
                    Authorization: localStorage.getItem('access_token')
                 }
            })
            .then((res) => {
                    setData(res.data)
            })
            .catch(function (err) { console.log(err)})
        }
        else{
            let JWT_token = ''
            axios.post(`${SERVER_URL}/auth/sign-in`, {
                tgTag: '@test',
                password: 'test',
            })
            .then(function (response) {
                JWT_token = response.data.jwt;
                localStorage.setItem('access_token', JWT_token)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(() => {
                axios.get(`${SERVER_URL}/asker/list`, {
                    headers: {
                        Authorization: localStorage.getItem('access_token')
                     }
                })
                .then((res) => {
                        setData(res.data)
                })
                .catch(function (err) { console.log(err)})
                })
            }
        }

, [])


    return(
    <div className="">
    <HeaderAdmin/>
    <SidebarSupport/>
    <div className="w-[calc(100%_-_138px)] ml-[96px] absolute top-[96px] mr-[32px]">
        {/* <LargeFilter/> */}
            <img className="w-[590px] h-[78px] mb-[42px]" src="../../../public/Input.svg"/>
        <div className="flex w-[calc(100vw_-_162px)] justify-between">
            <Search/>
            <Filter/>
        </div>
        <DefaultStroke/>
    <TasksList DataTaskList={[]}/>
    </div>
    </div>
    )
}

export default AdminPage;