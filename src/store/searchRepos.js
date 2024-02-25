import { makeAutoObservable } from "mobx"


const url = 'https://api.github.com/search/repositories';
const token = process.env.REACT_APP_DB_URL;

const cache =  new Map();

class SearchRepos {

    repos = [];
    
    constructor() {
        makeAutoObservable(this)
    }
    removeRepo(id) {
        this.repos = this.repos.filter(repo => repo.id !== id)
    }
    removeFromFavorites(id) {
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
              return repo;
          } else { return repo} })
    }

    fetchListOfRepo(query) {

                if (query) {
                    if (cache.has(query)) {
                        return null
                    } else {
                        fetch(`${url}?q=${query}`, {
                            method: 'GET',
                            headers: {
                                'Accept': 'application/vnd.github.v3+json',
                                'Authorization': `token ${token}`,
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

                        cache.set(query, query);
                    }
                
                }
    }
    
}

const searchReposInstance = new SearchRepos();

export default searchReposInstance;