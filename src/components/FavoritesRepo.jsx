import { observer } from "mobx-react-lite"
import { ItemRepo } from "./ItemRepo";
import cl from './ListOfRepo.module.css'
import favoritesRepos from "../store/favoritesRepos";

const FavoritesRepo = observer(() => {


    return (
        <>
            <ul className={cl.wrapperLeftColumn}>
                {favoritesRepos.reposFav.map(rep => {
                    return <ItemRepo key={rep.id} item={rep}/>
                    }
                    )}
            </ul>
        </>
        

        
    )    

})
export {FavoritesRepo}