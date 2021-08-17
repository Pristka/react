import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Course from './Course';
import Help from './Help';
import Register from './Register';
import Photo from './Photo';
import { Button } from '@material-ui/core';
import Blog from './Blog';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


const routing = (
    <Router>
        <div class="navBar">
            <header className="App-header">
                <a href="https://www.accenture.com/sk-en" target="blank"><img src={"https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg"} className="App-logo" alt="logo" /></a>
            </header>
            <nav>

                <Button >

                    <Link to="/">Home</Link>

                </Button>
                <Button color="inherit">

                    <Link to="/Course">All Courses</Link>

                </Button>
                <Button color="inherit">

                    <Link to="/Register">Register</Link>

                </Button>
                <Button color="inherit">

                    <Link to="/Photo">Gallery</Link>

                </Button>
                <Button color="inherit">

                    <Link to="/Help">Help</Link>

                </Button>
                <Button color="inherit">

                    <Link to="/Blog">Blog</Link>
                </Button>

                <Button color="inherit">

                    <Link to="/Contact">Contact Us</Link>

                </Button>

            </nav>
            <Route exact path="/" component={App} />
            <Route exact path="/Course" component={Course} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Photo" component={Photo} />
            <Route exact path="/Help" component={Help} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/Contact" component={Contact} />



            <footer><h3>Designed by Patrik Olejník</h3></footer>


        </div>

    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

