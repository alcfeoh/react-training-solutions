import React from 'react';
import './App.css';
import { Navigation } from './navigation/Navigation';
import { Jumbotron } from './jumbotron/Jumbotron';

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
		</main>
            </div>
		);
	}
};

export default App;
