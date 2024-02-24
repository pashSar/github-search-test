import { makeAutoObservable } from "mobx";
import copy from 'clipboard-copy';
import inputQuery from './inputQuery';


class BtnCopy {

    copied = false;

    constructor () {
        makeAutoObservable(this);
    }
    handleClick() {

        copy(inputQuery.inputQuery);
        this.copied = true;

        setTimeout(() => {
            this.copied = false;
        }, 2000);
    }
}

const btnCopyInstance = new BtnCopy();

export default btnCopyInstance;