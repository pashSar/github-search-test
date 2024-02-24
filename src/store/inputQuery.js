import { makeAutoObservable } from "mobx";


class InputQuery {
    inputQuery = '';

    constructor() {
        makeAutoObservable(this)
    }
    onChange(e) {
        this.inputQuery = e.target.value
    }
}

const inputQueryInstance = new InputQuery();

export default inputQueryInstance;