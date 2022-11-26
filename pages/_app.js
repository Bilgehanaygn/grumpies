import {useEffect} from 'react';
import '../styles/app.css';

const MyApp = function({Component, pageProps}) {
    useEffect(()=>{
        document.title="Grumpies";
        let url = "https://www.youtube.com/watch?v=ns7dG-Jj3HI";
        let audio = new Audio(url);
        audio.volume = 1;
        console.log("sadsa");
        audio.play();
    });



    return (
        <Component {...pageProps} />
    )
}

export default MyApp;