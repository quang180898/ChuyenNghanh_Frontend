import CardWrap from 'components/common/Card/CardWarp';
import { ImageAvatar } from 'components/common/Images';
import React, { useState } from 'react';

const Avatar = ({disabled}) => {

    const [state, setState] = useState({
        avatar: null
    })

    const onChangeFile = (img) => {
        console.log(img)
    }
    
    return (
        <CardWrap isHeigth title="Avatar">
            <ImageAvatar onChangeFile={onChangeFile} img={state.avatar} disabled={disabled}/>
        </CardWrap>
    )
}

export default Avatar;