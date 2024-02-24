import { makeAutoObservable } from "mobx";
import searchRepos from './searchRepos';



class FavoritesRepos {

    reposFav = [];
    
    constructor() {
        makeAutoObservable(this);
    }
    addToFavRepos(id) {

        const newAddRepo = searchRepos.repos.find(repo => repo.id === id);

        if(!this.reposFav.find(repo => repo.id === id)) {
            this.reposFav = [...this.reposFav, newAddRepo];
        }

    }
    removeFromFavRepos(id) {

        this.reposFav = this.reposFav.filter(repo => repo.id !== id)
    }
}
    

const favoritesReposInstance = new FavoritesRepos();

export default favoritesReposInstance;