import { useCallback, useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(1)
  const [isShow, setIsShow] = useState(true)
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1)
    }
  }, [count])

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow)
    // if (isShow){
    //   return false;
    // }
    // return isShow ?  true : false;
  }, [])
  return { count, isShow, handleClick, handleDisplay }
}
