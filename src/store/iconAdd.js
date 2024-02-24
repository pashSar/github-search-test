import { makeAutoObservable } from "mobx";


class IconAdd {

    iconFull = false;

    constructor() {
        makeAutoObservable(this)
    } 
    changeIcon() {
        this.iconFull = !this.iconFull;
    }

}


const iconAddInstance = new IconAdd();

export default iconAddInstance;