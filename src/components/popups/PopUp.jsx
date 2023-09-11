import { motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import { AppConfigsContext } from '../../serviceProviders/contexts/AppConfigsContext'

export const PopUp = () => {
  const { popUpMessage, setPopUpMessage } = useContext(AppConfigsContext);

  
  useEffect(() => {
    if(popUpMessage) {
      setTimeout(() => {
        setPopUpMessage(null)
      }, 5000)
    }
  }, [popUpMessage, setPopUpMessage])

  if(!popUpMessage) return null


  return (
    <motion.div 
      initial={{opacity: 0, x: -100}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: -100}}
    className="fixed top-11 right-10 w-72 rounded-md bg-slate-100 border p-3 shadow-xl" >
      {popUpMessage}
    </motion.div>
  )
}
