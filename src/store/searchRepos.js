import { makeAutoObservable } from "mobx"

const url = process.env.REACT_APP_DB_URL;


class SearchRepos {

    repos = [];

    constructor() {
        makeAutoObservable(this)
    }
    removeRepo(id) {
        this.repos = this.repos.filter(repo => repo.id !== id)
    }
    removeFromFavorites(id) {
        console.log(id);
        this.repos = this.repos.map(repo => {
           if (repo.id === id) {
            delete repo.isFavorites
        }
        return repo
        })
    }
    addToFavorites(id) {
        
        this.repos = this.repos.map(repo => {
            if (repo.id === id) {
              repo =  {...repo, isFavorites: !repo.isFavorites}
              console.log(repo.isFavorites);
              return repo;
          } else { return repo} })
    }

    fetchListOfRepo(query) {

                if (query) {

                fetch(`${url}?q=${query}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/vnd.github.v3+json',
                        'Authorization': 'token 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',
                    }
                })
                .then(response => response.json())
                .then(json => {
                    json.items = json.items.map(item => {
                        item = {...item, isFavorites: false}
                        return item
                    })
                    this.repos = [...json.items] 

                })
                }
    }
    
}

const searchReposInstance = new SearchRepos();

export default searchReposInstance;