import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { motion } from "framer-motion"

const FormsFactureOption2 = () => {
  return (
    <motion.div animate={{transform: 'translateY(0)',opacity: 1}} initial={{transform: 'translateY(-40%)',opacity: 0}} transition={{duration: 0.1}} className='w-full flex gap-4 h-auto mt-4 transition-all duration-300 ease-in-out items-end  max-md:flex-col max-md:items-center'>
        <div className="flex-1">
            <Label>Reférence de paiement / Reference de transaction</Label>
            <br />
            <i className='text-xs text-gray-400'>Votre reférence de paiement reçu par sms. Ex: PT-XXXXXXXXXX</i>
            <div className=' border relative flex justify-between items-center'>
                <div className='flex-2 h-full px-2 items-center justify-center block flex-col text-center left-0  '>
                    <Search/>
                </div>
                <Input placeholder="Reference de paiement reçu par sms" className="w-full flex-1"/>
            </div>
        </div>
        <Button className='flex-2 max-md:flex-1 max-md:w-full h-14 mt-10 bg-[#F39200] hover:bg-[#F39200]/90 '>Rechercher</Button>
    </motion.div>
  )
}

export default FormsFactureOption2