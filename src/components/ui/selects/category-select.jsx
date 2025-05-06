



import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CategorySelect() {
  return (
    <Select className="!bg-[#fff]">
      <SelectTrigger className="w-full !bg-[#fff] text-[#000]">
        <SelectValue placeholder="category" />
      </SelectTrigger>
      <SelectContent className='bg-[#fff] text-[#000]'>
        <SelectGroup>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
