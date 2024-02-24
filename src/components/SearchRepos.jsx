import { observer } from "mobx-react-lite"
import searchRepos from "../store/searchRepos"
import { useEffect } from "react"
import { ItemRepo } from "./ItemRepo";
import inputQuery from "../store/inputQuery";
import cl from './ListOfRepo.module.css'
import { throttle } from "../helpers/throttle";

const SearchRepos = observer(() => {



    const throttleFetchListOfRepo = throttle(() => searchRepos.fetchListOfRepo(inputQuery.inputQuery), 1000)


    useEffect(() => {throttleFetchListOfRepo()}, [inputQuery.inputQuery])

    return (
        <>
            <ul className={cl.wrapperLeftColumn}>
                {searchRepos.repos.map(rep => 
                        <ItemRepo key={rep.id} item={rep} />
                    )}
            </ul>
        </>
        

        
    )    

})
export {SearchRepos}