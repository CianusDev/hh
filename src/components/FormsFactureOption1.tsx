import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { motion } from "framer-motion"

const FormsFactureOptions1 = () => {
  return (
    <motion.div animate={{transform: 'translateY(0)',opacity: 1}} initial={{transform: 'translateY(-40%)',opacity: 0}} transition={{duration: 0.1}} className='w-full flex gap-4 h-auto mt-4 transition-all duration-300 ease-in-out items-end  max-md:flex-col max-md:items-center'>
        <div className="flex-1">
            <Label>Numero de reçu ou Email</Label>
            <br />
            <i className='text-xs text-gray-400'>Ex: 98XXXXXXXXX</i>
            <div className=' border relative flex justify-between items-center'>
                <div className='flex-2 h-full px-2 items-center justify-center block flex-col text-center left-0  '>
                    <Search/>
                </div>
                <Input placeholder="N° reçu ou email" className="w-full flex-1"/>
            </div>
        </div>
        <div className="flex-2 max-md:flex-1 max-md:w-full">
            <Label>Date de naissance</Label>
            <br />
            <i className='text-xs text-gray-400'>Votre date de naissance</i>
            <Input type="date" placeholder="Date de naissance" className="w-full"/>
        </div>
        <Button className='flex-2 max-md:flex-1 max-md:w-full h-14 mt-10 bg-[#F39200] hover:bg-[#F39200]/90 '>Rechercher</Button>
    </motion.div>
  )
}

export default FormsFactureOptions1