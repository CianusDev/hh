import { NavLink } from 'react-router-dom'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <header className='w-full container absolute top-0 left-1/2 -translate-x-1/2 z-[100] text-white  flex max-xl:justify-between max-xl:w-full justify-center items-center gap-10 h-16'>
        {/* logo */}
        <NavLink to={"/"} className='font-bold text-2xl'>
            <img src='https://rnpp.ci/images/logo.png'  alt='logo' className='w-60 max-sm:w-20 max-md:w-20 max-lg:w-20 max-xl:w-20  ' />
        </NavLink>
        {/* menu */}
        <div className='flex max-sm:hidden max-md:hidden  z-50 items-center gap-6 justify-center w-full'>
            <NavLink to={"/"}>Accueil</NavLink>
            <NavLink to={"#"}>Devenir revendeur</NavLink>
            <NavLink to={"#"}>Commandes</NavLink>
        </div>
        {/* buttons */}
        <div className='max-sm:hidden max-md:hidden max-lg:hidden max-xl:hidden flex items-center gap-4 '>
            <NavLink to={"/voucher"}>
                <Button className='bg-[#F39200]/90 hover:bg-orange-[#F39200]'>Achat de vouchers</Button>
            </NavLink>
            <NavLink to={"/voucher/search"}>
                <Button>Consulter son recu</Button>
            </NavLink>
            <NavLink to={"/reclamation"}>
                <Button className='bg-[#DDE1ED] hover:bg-[#DDE1ED]/70 text-muted-foreground'>Reclamation</Button>
            </NavLink>
            <Button className='max-sm:hidden'>Se connecter</Button>
        </div>
        {/* menu button */}
        <div>
            <Button size={"sm"} className='max-sm:block   max-md:block max-lg:block max-xl:block xl:hidden'><Menu size={20}/></Button>
        </div>
        
    </header>
  )
}

export default Header