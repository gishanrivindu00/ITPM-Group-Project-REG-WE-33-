import React, { Component } from 'react';



class Supermarket extends Component {
    render() {
        return (
            <body>
                <br></br>
                <h1><center>Sunkist Biscuit Factory Management System</center></h1>
                <div className="Scontainer">
                    <a href="/inventory">
                    <button className="sbtn btn1">Inventory Management</button>
                    </a>

                    <a href="/emp">
                    <button className="sbtn btn2">Employee Management</button>
                    </a>
                </div>

                <div className="container2">
                    <a href="/payment">
                    <button className="sbtn btn5">Payment Management</button>
                    </a>

                    <a href="/sales">
                    <button className="sbtn btn4">Sales Management</button>
                    </a>
                </div>
            </body>
        );
    }
}

export default Supermarket;
