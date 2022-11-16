import homeMainStyles from './home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import mainpageForeground from '../../assets/mainpage_foreground.png';
import HeaderComponent from '../HeaderComponent/HeaderComponent';

import discordLogo from '../../assets/logo-discord.png';
import twitterLogo from '../../assets/logo-twitter.png';
import openseaLogo from '../../assets/logo-opensea.png';



export const HomeFooter = () => {

    return (
        <div className={homeMainStyles['footer-wrapper']} >
            <Link href="https://discord.gg/grumpies" target="_blank">
                <Image src={discordLogo} className={homeMainStyles['footer-logo']} alt="img" />
            </Link>
            <Link href="https://twitter.com/NFTGrumpies" target="_blank">
                <Image src={twitterLogo} className={homeMainStyles['footer-logo']} alt="img" />
            </Link>
            <Link href="/">
                <Image src={openseaLogo} className={homeMainStyles['footer-logo']} alt="img" />
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