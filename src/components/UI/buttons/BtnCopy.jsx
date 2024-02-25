import React from 'react';
import btnCopy from '../../../store/btnCopy';
import { observer } from 'mobx-react-lite';
import cl from './BtnCopy.module.css';

const BtnCopy = observer(() => {

    return (
        <div>
            <button className={cl.btnOutline} disabled={btnCopy.copied} onClick={() => btnCopy.handleClick()}>
                {btnCopy.copied ? 'Copied' : 'Copy'}
            </button>
        </div>
    );
})

export default BtnCopy;
