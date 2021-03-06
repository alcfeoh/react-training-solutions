import React from 'react';
import './App.css';
import { Navigation } from './navigation/Navigation';
import { Jumbotron } from './jumbotron/Jumbotron';
import { LicensePlateComponent } from './license-plate/LicensePlateComponent';
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "./mock-data";

class App extends React.Component {
    render() {
        return (
           <div className="App">
           <header className="App-header">
           </header>
           {/* Add Navigation here */}
           <Navigation/>
                <main role="main">
                {/* Add Jumbotron here */}
                    <Jumbotron title="Welcome to our store" description="Browse our collection of license plates"/>
					<div className="row" >
            <div className="col-md-4" >
            {/* License plates go here */}
            <LicensePlateComponent plate={CALIFORNIA_PLATE} buttonText="Add to cart"/>
            </div>
            </div>
                </main>
            </div>
		);
	}
};

export default App;
