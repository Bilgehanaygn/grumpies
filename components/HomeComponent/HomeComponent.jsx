import homeMainStyles from './home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import mainpageForeground from '../../assets/mainpage_foreground.png';
import HeaderComponent from '../HeaderComponent/HeaderComponent';

import twitterLogo from '../../assets/logo-twitter.png';



export const HomeFooter = () => {

    return (
        <div className={homeMainStyles['footer-wrapper']} >
            <Link href="https://twitter.com/NFTGrumpies" target="_blank">
                <Image src={twitterLogo} className={homeMainStyles['footer-logo']} alt="img" />
            </Link>
        </div>
    )
}


const HomeComponent = () => {

    return (
        <div id={homeMainStyles['homemain-wrapper']} >
            <HeaderComponent />
            <Image src={mainpageForeground} id={homeMainStyles['homemain-foreground']} />
            <HomeFooter />
        </div>    
    )
}


export default HomeComponent;