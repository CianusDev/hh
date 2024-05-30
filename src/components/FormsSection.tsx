import { Label } from "@radix-ui/react-label"
import { RadioGroupFrom } from "./RadioGroupForm"
import RadioGroupTypeDem from "./RadioGroupTypeDem"
import { CountryDropdown } from 'react-country-region-selector';
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { VelocityScroll } from "./magicui/scroll-based-velocity";

const FormsSection = () => {
    const [country,setCountry]=useState("");
    // const [value, setValue] = useState();
  return (
    <section className="h-auto relative text  w-full flex justify-center gap-6 py-8 flex-wrap">
        <div className="w-1/2 p-4 absolute top-5 ">
        <VelocityScroll
            text="         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nostrum accusantium qui rerum debitis provident incidunt non modi, voluptatem in ducimus sint! Odio quaerat fuga quas nihil minima quae laudantium!    "
            default_velocity={0.5}
            className="font-display text-center text-xl font-bold tracking-[-0.02em] text-[#FA5252] leading-10"
            />
        </div>

        {/* section formulaire de demande de voucher */}
        <section className="w-[600px] text-[#7788A9] max-sm:w-auto h-auto p-6 mt-10 flex flex-col ">
            {/* selection de pays (par defaut Cote d'ivoire) */}
            <Label className="text-sm py-2">votre demande de titre sera effectuer a partir de :</Label>
            <div className="w-full h-14 border flex items-center justify-center  ">
                <RadioGroupFrom/>
            </div>
            {/* pays de residence */}
            <Label className="text-sm py-2">Pays de residence</Label>
            <div className="w-full h-14 border ">
                <CountryDropdown
                    value={country}
                    classes="w-full h-full bg-white border-none outline-none focus:outline-none"
                    onChange={(val) => setCountry(val)} />
            </div>
            {/* type de voucher */}
            <Label className="text-sm py-2">Type de voucher</Label>
            <div className="w-full h-14 border flex items-center justify-center flex-col ">
                <RadioGroupTypeDem/>
            </div>
            {/* nom et prenom */}
            <div className="flex gap-2 mt-6">
                <div className="flex-1">
                    <Label>Nom</Label>
                    <Input placeholder="Nom" className="w-full"/>
                </div>
                <div className="flex-1">
                    <Label>Prenom</Label>
                    <Input placeholder="Prenom" className="w-full"/>
                </div>
            </div>
            {/* date de naissance et lieu de naissance */}
            <div className="flex gap-2 mt-6">
                <div className="flex-1">
                    <Label>Date de naissance</Label>
                    <Input type="date" placeholder="Date de naissance" className="w-full"/>
                </div>
                <div className="flex-1">
                    <Label>Lieu de naissance</Label>
                    <Input placeholder="Lieu" className="w-full"/>
                </div>
            </div>
            {/* nom et prenom de la mère */}
            <div className="flex gap-2 mt-6">
                <div className="flex-1">
                    <Label>Nom de la mère</Label>
                    <Input  placeholder="Nom de la mère" className="w-full"/>
                </div>
                <div className="flex-1">
                    <Label>Prenom de la mère</Label>
                    <Input placeholder="Prenom de la mère" className="w-full"/>
                </div>
            </div>
            {/* telephone et adresse email */}
            <div className="flex gap-2 mt-6">
                <div className="flex-1">
                    <Label>Telephone</Label>
                    <Input type="tel" placeholder="numero de telephone" className="w-full"/>
                </div>
                <div className="flex-1">
                    <Label>Adresse Email</Label>
                    <Input autoCapitalize="none"  placeholder="email" className="w-full"/>
                </div>
            </div>
            {/* button Acheter */}
            <Button className="mt-6 bg-[#F39200]/90 hover:bg-[#F39200]">Acheter </Button>
        </section>


        {/* section information*/}
        <section className="w-1/5 max-xl:w-auto h-auto p-6 flex flex-col mt-10 ">
            {/* titre de la section */}
            <h1 className="text-xl font-semibold mb-2">Lorem</h1>
            {/* liste des information */}
            <ul className="flex p-2 flex-col gap-2 text-[#7788A9]  list-disc text-start ">
                <li className="">
                    Le timbre vous permet d'aller dans un centre d'enrolement de l'ONECI et de vous faire enroler
                </li>
                <li className="">
                    Présenter le reçu à l'agent enroleur de l'ONECI,
                </li>
                <li className="f">
                    Après vérification il procédera à votre enrôlement,
                </li>
                <li className="">
                    A la fin il vous délivrera un récipissé
                </li>
            </ul>
        </section>

    </section>
  )
}

export default FormsSection