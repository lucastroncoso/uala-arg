import { useEffect, useState } from 'react';

const useIsMobile = (breakpoint) => {
const [width, setWidth] = useState(false);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
   setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= breakpoint;

return isMobile
    
};

export default useIsMobile;