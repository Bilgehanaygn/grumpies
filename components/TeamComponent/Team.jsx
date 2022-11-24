import teamStyles from './team.module.css';
import Image from 'next/image';
import wleeAvatar from '../../assets/team/wlee_avatar.png';
import boiAvatar from '../../assets/team/boi_avatar.png';
import nickAvatar from '../../assets/team/nick_avatar.png';
import orriAvatar from '../../assets/team/orri_avatar.png';
import lindaAvatar from '../../assets/team/linda_avatar.png';
import HeaderComponent from '../HeaderComponent/HeaderComponent';

function Member({props}){

    return (
        <div className={teamStyles['member_wrapper']} >
            <Image src={props.image} alt="img" className={teamStyles['member_avatar']} />
            <br/>{props.name}
            <br/>{props.role}
        </div>
    )
}

export default function Team(){

    const members = [
        {name:"wlee⍥", role:"Art/Design", image:wleeAvatar},
        {name:"Linda", role:"Art/Design", image:lindaAvatar},
        {name:"Orri", role:"Co-founder", image:orriAvatar},
        {name:"Nick", role:"Founder", image:nickAvatar},
        {name:"ShermzBoi", role:"Collab Man", image:boiAvatar},
    ]

    return (
        <div className={teamStyles['main-wrapper']} >
            <HeaderComponent />
            <div className={teamStyles['blockouter_wrapper']} >
                <div style={{color:"#c2dbfd", marginTop:15}} >
                    <div className={teamStyles['meettheteam_wrapper']} >MEET THE TEAM</div>
                    <div className={teamStyles['teamslogan_wrapper']} >The team that is leading the journey to a Better Tomorrow</div>
                </div>
                <div className={teamStyles['mainblock_wrapper']} >
                {
                    members.map((element,index)=>{
                        return <Member props={element} key={index} />
                    })
                }
                </div>
            </div>

        </div>
    )
}