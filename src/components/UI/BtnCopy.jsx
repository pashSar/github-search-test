import React from 'react';
import btnCopy from '../../store/btnCopy';
import { observer } from 'mobx-react-lite';

const BtnCopy = observer(() => {

    return (
        <div>
            <button disabled={btnCopy.copied} onClick={() => btnCopy.handleClick()}>
                {btnCopy.copied ? 'Copied' : 'Copy'}
            </button>
        </div>
    );
})

export default BtnCopy;
