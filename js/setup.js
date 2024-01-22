import { SearchMovies } from "./searchmovies.js"

export class Filmography {
    constructor(root) {
        this.root = document.querySelector(root)
    }

    add(){
        SearchMovies.search('you me and dupree').then(movie => {
            this.moviesEntries = [movie]
            this.update()
        })
    }
}



export class SetupFilmography extends Filmography {
    constructor(root) {
        super(root)
        this.tbody = document.querySelector('table tbody')

        this.add()
        this.update()
    }

    update() {
        this.deleteStructure()
        

            this.moviesEntries
            .forEach((movie) => {
                const column = this.creatNewHtml()

                column.querySelector('.movieSelected img').src = movie.Poster
                column.querySelector('.movieSelected p').textContent = movie.Title
                column.querySelector('.imdbRating').textContent = movie.imdbRating
                column.querySelector('.movieYear').textContent = movie.Year

                this.tbody.append(column)
            })

    }

    creatNewHtml() {
        const tr = document.createElement('tr')

        tr.innerHTML = `<tr>
        <td class="movieSelected">
            <img src="https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
                alt="poster">
            <p>Once Upon a Time… in Hollywood</p>
        </td>
        <td class="imdbRating">7.6</td>
        <td class="movieYear">2019</td>
    </tr>`

        return tr
    }

    deleteStructure() {
        this.tbody.querySelectorAll('tr')
            .forEach((movie) => {
                movie.remove()
            })
    }
}