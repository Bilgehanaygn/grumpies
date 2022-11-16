import {useEffect} from 'react';
import '../styles/app.css';

const MyApp = ({Component, pageProps}) => {
    useEffect(()=>{
        document.title="Grumpies"
    });



    return (
        <Component {...pageProps} />
    )
}

export default MyApp;