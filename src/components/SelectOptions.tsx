import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  type SelectOptionsProps = {
    select:string,
    setSelect:React.Dispatch<React.SetStateAction<string>>,
  }
  
const SelectOptions = (props: SelectOptionsProps) => {
    const handleOptionChange = (option: string) => {
        props.setSelect(option);
      };
    
  return (
    <Select onValueChange={handleOptionChange}>
        <SelectTrigger className="w-full">
            <SelectValue placeholder="-" />
        </SelectTrigger>
        <SelectContent className="text-[#7788A9]">
            <SelectItem value="option1">Rechercher avec mon numéro de reçu ou mon adresse email</SelectItem>
            <SelectItem value="option2">Rechercher avec ma reférence de paiement ou de transaction</SelectItem>
            <SelectItem value="option3">Rechercher avec mes informations personnelles</SelectItem>
        </SelectContent>
</Select>
  )
}

export default SelectOptions