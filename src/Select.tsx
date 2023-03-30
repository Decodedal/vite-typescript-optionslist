import React from 'react'
import styles from "./select.module.css"

type SelectOption = {
    label:string;
    value:string;
}

type SelectProps ={
options:SelectOption[]
value?: SelectOption
onChange:(value: SelectOption | undefined) => void

}

const Select = ({value, onChange, options}: SelectProps) => {
  return (
    
    <div className={styles.container}>
        <span className={styles.value}>
            <button className={styles["clear-btn"]}>&times;</button>
            <div className={styles.caret}></div>
            <ul className={styles.options}>
                {
                    options.map(option =>{
                        return(
                            <li key={option.value}>
                                {option.label}
                            </li>
                        )
                    })
                }
            </ul>
        </span>
    </div>
 
  )
}

export default Select