import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  type SelectReclamationOptionsProps = {
    select:string,
    setSelect:React.Dispatch<React.SetStateAction<string>>,
  }
  
const SelectReclamationOptions = (props: SelectReclamationOptionsProps) => {
    const handleOptionChange = (option: string) => {
        props.setSelect(option);
      };
    
  return (
    <Select onValueChange={handleOptionChange}>
        <SelectTrigger className="w-full">
            <SelectValue placeholder="Selectionner le motif de la réclamation" />
        </SelectTrigger>
        <SelectContent className="text-[#7788A9]">
            <SelectItem value="option1">Mon paiement a échoué mais j'ai été débité</SelectItem>
            <SelectItem value="option2">Je n'arrive pas à imprimer mon reçu</SelectItem>
            <SelectItem value="option3">J'ai fait un double paiement je souhaite me faire rembourser</SelectItem>
            <SelectItem value="option4">Impossible de poursuivre mon inscription</SelectItem>
            <SelectItem value="option5">Mon code d'autorisation ne fonctionne pas</SelectItem>
        </SelectContent>
</Select>
  )
}

export default SelectReclamationOptions