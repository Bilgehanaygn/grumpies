import {useState} from 'react';
import headerStyles from './header.module.css';
import logoImage from '../../assets/logo.png';
import NavigationButton from '../NavigationButton/NavigationButton';
import Image from 'next/image';
import { useRouter } from 'next/router';
import mobileMenuIcon from '../../assets/mobile_menu_icon.png';


export default function HeaderComponent (){
    const [modalOpen, setModalOpen] = useState(false);
    const router = useRouter();

    return (
        <div>
            <div className={headerStyles['header-wrapper']} >
                <NavigationButton text={"HOME"} navLink={"/"} activeRoute={router.pathname} />
                <NavigationButton text={"SHOP"} navLink={"/shop"} activeRoute={router.pathname} />
                <Image src={logoImage} style={{cursor:"pointer"}} alt="img" />
                <NavigationButton text={"TEAM"} navLink={"/team"} activeRoute={router.pathname} />
                <NavigationButton text={"MINDMAP"} navLink={"/mindmap"} activeRoute={router.pathname} />
            </div>
            <div className={headerStyles['mobile-header-wrapper']} >
                <Image src={logoImage} style={{cursor:"pointer", width:30, height:50}} alt="img" />
                {
                    modalOpen ? null :
                    <Image src={mobileMenuIcon} style={{width:40, height:40, cursor:"pointer"}} alt="img" onClick={()=>{setModalOpen(!modalOpen)}} />
                }
            </div>
            {
                modalOpen ?
                <div style={{position:"absolute", backgroundColor:"rgba(14,79,173,0.3)", top:0, right:0, 
                width:"50vw", height:"100vh", zIndex:2, color:"#bfd5fd", fontFamily:"whatever", fontSize:20, paddingTop:20, 
                boxSizing:"border-box"}} >
                    <div style={{textAlign:"right"}} onClick={()=>{setModalOpen(!modalOpen)}} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                    <NavigationButton text={"HOME"} navLink={"/"} />
                    <NavigationButton text={"SHOP"} navLink={"/shop"} />
                    <NavigationButton text={"TEAM"} navLink={"/team"} />
                    <NavigationButton text={"MINDMAP"} navLink={"/mindmap"} />
                </div>
                :
                null
            }
        </div>

    )
}