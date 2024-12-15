import React, { Component } from 'react';

class Childunmount extends Component {

    componentWillUnmount(){
        setTimeout(function() {
            console.log("This message is displayed after 3 seconds");
        }, 3000);
    }

    render() {
        console.log("Render2........");
        return (
            <div>
                <h1>Child comp</h1>
            </div>
        );
    }
}

export default Childunmount;
