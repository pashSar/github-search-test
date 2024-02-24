import { observer } from "mobx-react-lite";
import inputQuery from "../../store/inputQuery";



const InputQuerry = observer(() => {

    return (
        <>  
            <input type="text" placeholder="введите запрос" value={inputQuery.inputQuery} onChange={e => inputQuery.onChange(e)}/>
        </>
        
    )
})


export {InputQuerry}