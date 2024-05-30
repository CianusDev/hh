import { NavLink } from "react-router-dom"
import { Button } from "./ui/button"

const ThirdMIddleBar = () => {
  return (
    <section className='max-sm:h-auto h-96 p-4 w-full max-md:w-auto gap-4 mb-10 flex flex-col justify-center items-center'>
        <div className='w-full max-sm:w-auto max-md:px-4  flex justify-center items-center flex-col my-10'>
            <h1 className='text-4xl font-bold'>Lorem ipsum dolor sit am? </h1>
        </div>
        <ul className="flex mx-6 list-disc flex-col gap-4">
            <li className="">
                Le timbre vous permet d'aller dans un centre d'enrolement de l'ONECI et de vous faire enroler
            </li>
            <li className="">
                Présenter le reçu à l'agent enroleur de l'ONECI,
            </li>
            <li className="">
                Après vérification il procédera à votre enrôlement,
            </li>
            <li className="">
                A la fin il vous délivrera un récipissé
            </li>
        </ul>
        <div className="my-4">
            <NavLink to={"/voucher"}>
                <Button className='bg-orange-500/90 hover:bg-orange-500'>Acheter le ticket</Button>
            </NavLink>
        </div>
    </section>
  )
}

export default ThirdMIddleBar