import Select from "./Select"
import React, {useState} from "react"

type SelectOption = {
  label:string;
  value:string|number;
}

const options =[
  {label:"first", value:1},
  {label:"second", value:2},
  {label:"third", value:3},
  {label:"forth", value:4},
  {label:"fifth", value:5},
]

function App() {

  const [value, setValue] = useState<SelectOption|undefined>(options[0])

  return (
    <div>
      <Select options={options} value={value} onChange={setValue}/>
    </div>
  )
}

export default App
