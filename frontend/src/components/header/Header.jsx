import React, { Fragment } from 'react';
import './Header.css';
import Card from '../card/Card';



const Header = ({ searchMovie, query, setQuery, movies }) => {
    return (
        <Fragment>
            <div className="header">
                <h1 className="title">SareBoithok</h1>

                {/*Search form*/}

                <div className="search">
                    <form className="search-form" onSubmit={searchMovie}>
                        <label
                            htmlFor="query"
                            className="name"
                        >
                        </label>
                        <input
                            type="text"
                            name="query"
                            placeholder="Harry Potter and the Chamber of Secrets"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>

            {/*Card component*/}

            <div className="list-movie">
                <Card movies={movies} />
            </div>
        </Fragment>
    )
}

export default Header;