import navigationButtonStyles from './navigationbutton.module.css';
import Link from 'next/link';

export default function NavigationButton ({text, navLink, activeRoute}){


    return (
        <Link href={navLink} className={`${navigationButtonStyles['navigationbutton-wrapper']} ${navLink===activeRoute ? navigationButtonStyles['active-route'] : null}`} >
            {text}
        </Link>
    )
}