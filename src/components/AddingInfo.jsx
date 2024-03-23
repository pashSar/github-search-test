import { observer } from "mobx-react-lite";
import additionalInfo from "../store/additionalInfo";
import classes from './UI/card/ItemRepo.module.css';
import clAdd from './AddingInfo.module.css';


const AddingInfo = observer (() => {

    const item = additionalInfo.detailItem;
//changes in master branch gitHub
// changes in master branch
// changes in branch claim-000001
    let webSite = '';
    if(!item.homepage) {webSite = ' ---нет---'} else {
        webSite = item.homepage;
    }



    return (
        <article className={clAdd.wrapper}>
            <h1 className={clAdd.head}>{item?.name}</h1>
            <figure>
                <img className={clAdd.repoItemImgBig} src={item?.owner?.avatar_url} alt="here were a logotype" />
                <figcaption><h4>{item.full_name}</h4></figcaption>
            </figure>

            <div className={clAdd.characteristics}>
                <p>Описание: <span>{item.description}</span></p>
                <p className={clAdd.linkWithDesc}>Url: <a href={item.html_url} target='blank'>{item.html_url}</a></p>
                <p>Язык: <strong>{item.language}</strong></p>
                <p className={classes.repoItemText}>Число старов: <strong>{item.stargazers_count}</strong></p>
                <p className={classes.repoItemText}>Число форков: <strong>{item.forks_count}</strong></p>
                <p className={classes.repoItemText}>Число наблюдателей: <strong>{item.watchers}</strong></p>        
                <p className={clAdd.linkWithDesc}>Сайт: 
                {item.homepage 
                    ? <a href={item.homepage} target='blank'> {webSite}</a>
                    : <span>{webSite}</span>
                }
                </p>
                <p>Владелец: <strong>{item.owner.login}</strong></p>
                <p>Создано: {item.created_at}</p>
            </div>
            <div className={clAdd.bottomPart}>
                <figure>
                    <figcaption>{item.owner.login}</figcaption>
                    <img className={classes.repoItemImg} src={item.owner.avatar_url} alt="here were a logo" />
                </figure>
            </div>
            
        </article>
    )
})

export {AddingInfo}
