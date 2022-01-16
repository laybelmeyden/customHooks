import React from 'react'

const UseInputCustom = (initial = '') => {
    const [value, setValue] = React.useState(initial);
    const onInput = (e) => {
        setValue(e.target.value)
    }
    return {
        value, onInput
    }
}

export default UseInputCustom
