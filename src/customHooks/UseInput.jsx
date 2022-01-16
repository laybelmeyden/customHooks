import React from 'react'
import UseInputCustom from './UseInputCustom'

const UseInput = () => {
    const changeInputNew = UseInputCustom()
    return (
        <div className='flex'>
            <input type="text" {...changeInputNew} placeholder='add text'/>
            <p>{changeInputNew.value}</p>
        </div>
    )
}

export default UseInput
