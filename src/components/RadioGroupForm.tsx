import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupFrom() {
  return (
    <RadioGroup  defaultValue="cote d'ivoire" className="flex w-full justify-around font-boldjustify-around">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="cote d'ivoire" id="r1" />
        <Label htmlFor="r1">Cote d'ivoire</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="international" id="r2" />
        <Label htmlFor="r2">International</Label>
      </div>
    </RadioGroup>
  )
}
