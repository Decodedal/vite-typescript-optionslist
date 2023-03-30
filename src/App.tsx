import Select from "./Select"

const options =[
  {label:"first", value:1},
  {label:"second", value:2},
  {label:"third", value:3},
  {label:"forth", value:4},
  {label:"fifth", value:5},
]

function App() {

  return (
    <div>
      <h1>Hello from vite and typescript</h1>
      <Select options={options}/>
    </div>
  )
}

export default App
