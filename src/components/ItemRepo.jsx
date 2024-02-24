import { Link } from 'react-router-dom';
import cl from './ListOfRepo.module.css';
import additionalInfo from '../store/additionalInfo';
import { IconFavorite } from './UI/icons/IconFavorite';
import { IconFavoriteChecked } from './UI/icons/IconFavoriteChecked';
import favoritesRepos from '../store/favoritesRepos';
import { observer } from 'mobx-react-lite';
import iconAddInstance from '../store/iconAdd';
import searchReposInstance from '../store/searchRepos';


const ItemRepo = observer (({item}) => {

    


    const handleClick = (flag) => {
        if (flag) {
            searchReposInstance.removeFromFavorites(item.id)
            favoritesRepos.removeFromFavRepos(item.id);

        } else {
            searchReposInstance.addToFavorites(item.id)
            favoritesRepos.addToFavRepos(item.id)
        }
        iconAddInstance.changeIcon();

    }

    return (
        <li className={cl.repoItem} >
            <div className={cl.topPartItem}>
            <img className={cl.repoItemImg} src={item.owner.avatar_url} alt="here were a logo" />
                <div className={cl.topPartIcons}>
                    {item.isFavorites
                    ? <IconFavoriteChecked onClick={() => handleClick(true)}/>
                    : <IconFavorite onClick={() => handleClick(false)}/>}
                </div>
            </div>
            
            <div className={cl.middlePartItem}>
                <h3 className={cl.repoItemHead}>{item.name}</h3>
                <a className={cl.repoItemLink} href={item.html_url} target='blank'>{item.full_name}</a>
            </div>

            <div className={cl.repoItemNumbers}>
                <p className={cl.repoItemText}>Число старов: <strong>{item.stargazers_count}</strong></p>
                <p className={cl.repoItemText}>Число форков: <strong>{item.forks_count}</strong></p>
            </div>
            
            <div className={cl.bottomPartItem}>
                <Link to={`${item.id}`} onClick={() => additionalInfo.defineItem(item)}> Подробнее...</Link>
            </div>
            
               
        </li>
    )

})


export {ItemRepo}
