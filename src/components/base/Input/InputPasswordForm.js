
import React from 'react';
import { Input, Form } from 'antd';
import { getValueAndSetDefault } from "../../../functions/Utils";

const InputPasswordForm =
    (props) => {
        const { prefix, inputClassName, label, classNameGroup, labelClassName, name } = props
        return (
            <>
                <label className={getValueAndSetDefault(labelClassName, 'label')}>
                    {label}
                </label>
                <Form.Item name={name}>
                    < Input.Password
                        className={getValueAndSetDefault(inputClassName, '')}
                        prefix={prefix}
                    />
                </Form.Item>
            </>
        )
    }
export default InputPasswordForm;