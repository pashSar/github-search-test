import cl from './ListOfRepo.module.css'
import { InputQuerry } from "./UI/InputQuerry";
import { SearchRepos} from "./SearchRepos";
import { FavoritesRepo } from './FavoritesRepo';
import { ProgressBar } from './progress/ProgressBar';
import BtnCopy from './UI/BtnCopy';


const ListOfRepo = () => {

    
return (
    <div >
        <ProgressBar/>
        <main className={cl.mainWrapper}>
            <div className={cl.controls}>
                <InputQuerry/>
                <BtnCopy/>
            </div>
            <h1>Список репозиториев</h1>
            <div className={cl.wrapper}  > 
                <SearchRepos/>
                <FavoritesRepo/>
            </div>
        </main>
    </div>
)

}

export {ListOfRepo};