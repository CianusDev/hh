import { Button } from './ui/button'
import { FadeText } from './magicui/fade-text'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='w-full h-[600px] aspect-video bg-black relative flex items-center justify-center'>
      {/* image en arriere-plan du Hero  */}
        <img 
        src="https://images.pexels.com/photos/6995145/pexels-photo-6995145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="banner"
        className='absolute h-full object-top z-10 w-full object-cover' />
        <div className='w-full h-full absolute bg-[#2a354f]/50 z-20'/>
        {/* Titre et sous-titre */}
        <div className=' w-2/3 max-sm:p-4 max-sm:w-full h-full flex items-center justify-center flex-col gap-5 z-50 text-white'>
            <FadeText
                className="font-bold max-sm:text-2xl text-4xl text-center"
                direction="up"
                framerProps={{
                show: { transition: { delay: 0.2 } },
                }}
                text="Lorem"
            />
            <FadeText
                className="text-xl max-sm:text-sm font-[350] text-center"
                direction="up"
                framerProps={{
                show: { transition: { delay: 0.4 } },
                }}
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta iure numquam accusantium ea tempore qui velit nulla aspernatur! Praesentium illum exercitationem perferendis eius tenetur ipsum cumque quo eligendi doloremque?"
            />
            {/* boutton d'achat */}
            <div className='mt-8'>
              <NavLink to={"/voucher"}>
                    <Button className='bg-[#F39200]/90 hover:bg-orange-[#F39200]'>Acheter le ticket</Button>
              </NavLink>
            </div>
        </div>
    </section>
  )
}

export default Hero