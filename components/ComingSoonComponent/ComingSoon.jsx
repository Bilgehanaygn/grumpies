import comingSoonStyles from './comingsoon.module.css';
import Image from 'next/image';
import comingSoonIllus from '../../assets/coming_soon/coming_soon_illus_rotated.png';
import effects from '../../assets/coming_soon/effects.png';
import otherEffects from '../../assets/coming_soon/other_effects.png';
import seasonComing from '../../assets/coming_soon/seasonComing.png';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import { HomeFooter } from '../HomeComponent/HomeComponent';


export default function ComingSoon(){

    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", 
            alignItems:"center"}} className={comingSoonStyles['main_container']} >
            <HeaderComponent />
            <div className={comingSoonStyles['main_wrapper']} >
                <div className={comingSoonStyles['illus_wrapper']}>
                    <Image src={comingSoonIllus} alt="img" className={comingSoonStyles['comingsoon_illus_styles']} />
                    <Image src={effects} alt="img" className={comingSoonStyles['effects']} />
                    <Image src={otherEffects} alt="img" className={comingSoonStyles['effects']} />
                </div>
                <div className={comingSoonStyles['season_coming_wrapper']} >
                    <Image src={seasonComing} alt="img" className={comingSoonStyles['season_coming_image']} />
                </div>
            </div>
            <HomeFooter />
        </div>

    )
}