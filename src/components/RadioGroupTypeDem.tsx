import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const RadioGroupTypeDem = () => {
  return (
    <RadioGroup defaultValue="ticket" className="flex justify-around w-full">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="ticket" id="r1" />
      <Label htmlFor="r1">ticket</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="timbre" id="r2" />
      <Label htmlFor="r2">timbre</Label>
    </div>
  </RadioGroup>
  )
}

export default RadioGroupTypeDem