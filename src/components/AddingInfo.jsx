import { observer } from "mobx-react-lite";
import additionalInfo from "../store/additionalInfo";
import classes from './ListOfRepo.module.css';
import clAdd from './AddingInfo.module.css';


const AddingInfo = observer (() => {

    const item = additionalInfo.detailItem;


    let webSite = '';
    if(!item.homepage) {webSite = ' ---нет---'} else {
        webSite = <strong>{item.homepage}</strong> 
    }



    return (
        <article className={clAdd.wrapper}>
            <h1>{item.full_name}</h1>
            <figure>
                <img className={clAdd.repoItemImgBig} src={item?.owner?.avatar_url} alt="here were a logotype" />
                <figcaption><h4>{item?.name}</h4></figcaption>
            </figure>

            <div className={clAdd.characteristics}>
                <p>Описание: {item.description}</p>
                <p>url: <a href={item.html_url} target='blank'>{item.html_url}</a></p>
                <p>Язык: <strong>{item.language}</strong></p>
                <p className={classes.repoItemText}>Число старов: <strong>{item.stargazers_count}</strong></p>
                <p className={classes.repoItemText}>Число форков: <strong>{item.forks_count}</strong></p>
                <p className={classes.repoItemText}>Число наблюдателей: <strong>{item.watchers}</strong></p>        
                <p>Сайт: 
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