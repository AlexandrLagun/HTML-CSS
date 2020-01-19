import React from 'react';

class Success extends React.Component{
    constructor(props){
        super(props);
        this.state = { error: null,
            isLoaded: false,
            items: Array
        }
    }

    componentDidMount() {
        // Fetch тут
        fetch("http://api.openweathermap.org/data/2.5/weather?q=94088&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial")
            .then((response) => response.json())
            .then((response) => {
                    this.setState({items: response});
                    this.setState({isLoaded: true});
            })
            .then((error) => {
                this.setState({false: true});
                this.setState({error});
            })


    }



    render (){
        const ar = this.state.items;
        //const arind = typeof ar;
        let art = ar.weather.description;
    return <div>{JSON.stringify( art)}</div>; 
    }

}

export default Success;