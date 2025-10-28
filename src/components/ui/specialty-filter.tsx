import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { motion } from "framer-motion"

interface SpecialtyFilterProps {
  specialties: string[]
  selectedSpecialty: string
  onChange: (value: string) => void
}

const SpecialtyFilter: React.FC<SpecialtyFilterProps> = ({
  specialties,
  selectedSpecialty,
  onChange,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-xs mx-auto mb-8"
    >
      <Select value={selectedSpecialty} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by Specialty" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All Specialties</SelectItem>
            {specialties.map((specialty) => (
              <SelectItem key={specialty} value={specialty.toLowerCase()}>
                {specialty}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </motion.div>
  )
}

export default SpecialtyFilter