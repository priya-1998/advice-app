import React from 'react';

//we need to import axios inorder to make a get request to certain api
import axios from 'axios';
import './App.css';

class App extends React.Component{
    state= { advice: '' };

    //some random advice needs to be fetched at the beginning and for that we will use react lifecycle methods
    componentDidMount(){
        this.fetchAdvice();
    }

    //we don't need to write const here, because its a function inside a class hence would be treated as method
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')

        //for response
            .then((response) => {
             //to destruct the advice from response
                const { advice } = response.data.slip;

                this.setState({ advice });
            })

            //for error
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{this.state.advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>ADVICE PLEASE!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;