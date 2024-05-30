import { motion } from "framer-motion"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const FormsFactureOption3 = () => {
  return (
    <motion.div animate={{transform: 'translateY(0)',opacity: 1}} initial={{transform: 'translateY(-10%)',opacity: 0}} transition={{duration: 0.1}} className='w-full flex gap-4 h-auto mt-4 transition-all duration-300 ease-in-out items-start  flex-col max-md:items-center'>
        <div className="flex gap-4  flex-wrap w-full">
            <div className="flex-1">
                <Label>Nom</Label>
                <Input placeholder="Nom" className="w-full"/>
            </div>
            <div className="flex-1">
                <Label>Prenom (s)</Label>
                <Input placeholder="Prenom" className="w-full"/>
            </div>
            <div className="flex-2 max-sm:flex-1">
                <Label>Date de naissance</Label>
                <Input type="date" placeholder="Date de naissance" className="w-full"/>
            </div>
        </div>

        <div className="flex gap-4 max-sm:flex-col w-full">
            <div className="flex-1">
                <Label>Nom de la mère</Label>
                <Input  placeholder="Nom de la mère" className="w-full"/>
            </div>
            <div className="flex-1">
                <Label>Prenom de la mère</Label>
                <Input placeholder="Prenom de la mère" className="w-full"/>
            </div>
        </div>

        <Button className='flex-2 max-md:flex-1 max-md:w-full h-14 mt-4 bg-[#F39200] hover:bg-[#F39200]/90 '>Rechercher</Button>
    </motion.div>
  )
}

export default FormsFactureOption3