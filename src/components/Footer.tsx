import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full bg-[#2A354F] h-[490px] max-sm:h-auto flex-wrap text-white pt-28 relative flex max-sm:flex-col max-md:gap-8 items-center justify-around '>
        <div className='h-full max-md:py-4'>
            <h1 className='font-bold text-2xl'>LOGO</h1>
        </div>
        <div className='flex flex-col gap-4 h-full'>
            <h1 className='font-bold text-md'> Menu</h1>
            <div className='flex flex-col gap-2 text-muted-foreground max-md:items-center '>
                <NavLink to={"#"}>link</NavLink>
                <NavLink to={"#"}>link</NavLink>
                <NavLink to={"#"}>link</NavLink>
            </div>
        </div>
        <div className='flex flex-col gap-4 max-md:items-center h-full'>
            <h1 className='font-bold text-md'> Lien utile</h1>
            <div className='flex flex-col gap-2 text-muted-foreground'>
                <NavLink to={"#"}>link</NavLink>
                <NavLink to={"#"}>link</NavLink>
                <NavLink to={"#"}>link</NavLink>
            </div>
        </div>

        <div className='w-full flex justify-center items-center sm:absolute bottom-10 max-md:py-6'>
            <h1 className='max-md:text-sm text-center'>©2024 ONECI. All rights reserved. Powered by CinetPay</h1>
        </div>
    </footer>
  )
}

export default Footer