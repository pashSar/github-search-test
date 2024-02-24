import { makeAutoObservable, } from "mobx"

class AdditionalInfo {
    detailItem = {}; 
    
    constructor() {
        makeAutoObservable(this)
    }
    defineItem(item) {
        this.detailItem = {...item}
    }
}

const additionalInfoInstance = new AdditionalInfo();

export default additionalInfoInstance;
