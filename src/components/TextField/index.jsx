import { useState } from "react"

const TextField = (props) => {
    const {text, onChange = () => {}} = props

    const onTextChange = (event) => {
        let text = event.target.value
        
        onChange(text)
    }

    return <input type='text' value={text} onChange={onTextChange}></input>
}

export default TextField