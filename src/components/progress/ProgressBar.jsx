import { useEffect, useRef, } from 'react';
import clProg from './Progress.module.css';
import { throttle } from '../../helpers/throttle';


const ProgressBar = () => {




    const handleScroll = () => {
        const viewPortHeight = window.innerHeight;
        const pageHeight = document.body.offsetHeight;
        const currentPosition = window.scrollY;

        const availableHeight = pageHeight - viewPortHeight;
        const percent = (currentPosition / availableHeight)*100;
        if (refProgr.current) {
            refProgr.current.value = percent;
        }
    }
    const throttleHandleScroll = throttle(handleScroll, 100)
    
    const refProgr = useRef();

    useEffect(() => {
        window.addEventListener('scroll', throttleHandleScroll);

        return () => {
            window.removeEventListener('scroll', throttleHandleScroll);
        };
    });


    return (
        <header className={clProg.header}>
            <progress className={clProg.progressBar}  ref={refProgr} value='0' max='100'/>
        </header>
    )
}

export {ProgressBar}