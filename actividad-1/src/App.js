import React from "react";
import {Footer} from "./components/Footer";
import Router from "./routes/Router";
import {BookContext} from "./context/BookContext";
import {useBooks} from "./hooks/useBooks";

function App() {
    const books = useBooks();

    return (
        <BookContext.Provider value={{books}}>
            <div className="App container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <Router></Router>
                <Footer/>
            </div>
        </BookContext.Provider>
    );
}

export default App;
