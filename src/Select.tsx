import React, { useState } from 'react'
import styles from "./select.module.css"

type SelectOption = {
    label:string;
    value:string|number;
}

type SelectProps ={
options:SelectOption[]
value?: SelectOption
onChange:(value: SelectOption | undefined) => void

}

const Select = ({value, onChange, options}: SelectProps) => {

    const [isOpen, setIsOpen] = useState<Boolean>(false)

    const clearOptions = (): void =>{
        onChange(undefined)
    }
    
    const selectOption = (option: SelectOption)=>{
        onChange(option)
    }

  return (

  
    <div onBlur={() => setIsOpen(false)} onClick={()=> setIsOpen(!isOpen)} tabIndex={0} className={styles.container}>
        <span className={styles.value}>{value?.label}</span>
            <button className={styles["clear-btn"]} onClick={(e) =>{
                e.stopPropagation()
                clearOptions()
            }}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}>⬇️</div>
            <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
                {
                    options.map(option =>{
                        return(
                            <li onClick={() =>{
                                // e.stopPropagation()
                                selectOption(option)
                                setIsOpen(false)
                            }} key={option.value} className={styles.option}>
                                {option.label}
                            </li>
                        )
                    })
                }
            </ul>
    </div>
 
  )
}

export default Select