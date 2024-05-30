import { Input } from './ui/input'
import { Button } from './ui/button'
import { motion } from "framer-motion"
const FormsReclamationOption = () => {
  return (
    <motion.div animate={{transform: 'translateY(0)',opacity: 1}} initial={{transform: 'translateY(-40%)',opacity: 0}} transition={{duration: 0.1}} className='w-full flex gap-4 h-auto mt-4 transition-all duration-300 ease-in-out items-end  flex-col max-md:items-center'>
        <div className="flex-1 w-full">
            <div className=' '>
                <Input placeholder="Numéro de téléphone utilisé pour le paiement" className="w-full flex-1"/>
            </div>
        </div>
        <div className="flex-1 w-full">
            <div className=' '>
                <Input placeholder="Identifiant de paiement reçu par sms" className="w-full flex-1"/>
            </div>
        </div>
        <Button className='  w-full h-14 mt-10 bg-[#F39200] hover:bg-[#F39200]/90 '>Envoyer une reclamation</Button>
    </motion.div>
  )
}

export default FormsReclamationOption