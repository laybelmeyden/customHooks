import React from 'react'

const UseDebaunce = (callback, delay) => {
    const timer = React.useRef();
    const debounceCallback = React.useCallback((...args) => {
        if(timer.current){
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])
    return debounceCallback
}

export default UseDebaunce
