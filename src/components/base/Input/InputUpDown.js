import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd';
import { getValueAndSetDefault } from "../../../functions/Utils";

const InputUpDown = ({ prefix, suffix, value, onChange, inputClassName, classNameGroup }) => {
    const [state, setState] = useState(1)
    const [disabled, setDisabled] = useState(false)

    

    const handleChange = (e) => {
        const newNumber = parseInt(e.target.value);
        if (newNumber > 0) {
            setState(newNumber);
        }
        if (onChange) {
            onChange(state)
        }
    }

    useEffect(() => {
        if(state < 2) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [state])

    useEffect(() => {
        if(value) {
            setState(parseInt(value))
        }
    }, [value])


    return (
        <div className={getValueAndSetDefault(classNameGroup, 'form-group')}>
            <div className="button-updown">
            <Button className="" onClick={() => setState(state - 1)} disabled={disabled}>
                <i class="las la-minus"></i>
            </Button>
            <Input
                className={getValueAndSetDefault(inputClassName, '')}
                onChange={handleChange}
                value={state}
                suffix={suffix}
                prefix={prefix}
            >
            </Input>
            <Button className="" onClick={() => setState(state + 1)}>
                <i class="las la-plus"></i>
            </Button>
            </div>
        </div >
    )
}

export default InputUpDown;