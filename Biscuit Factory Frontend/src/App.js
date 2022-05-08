import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import CreateInventory from './components/Inventory_Management/AddInventory';
import EditInventory from './components/Inventory_Management/EditInventory';
import GHome from './components/Inventory_Management/Home';
import InventoryDetails from './components/Inventory_Management/InventoryDetails';
import GenerateReport from './components/Inventory_Management/genrep';
import './style/Gstyle.css';

import CreateEmployee from './components/Employee_Management/CreateEmployee';
import EditEmployee from './components/Employee_Management/EditEmployee';
import EmployeeDetails from './components/Employee_Management/EmployeeDetails';
import EmpHome from './components/Employee_Management/EmpHome';
import AllLeaves from './components/Employee_Management/AllLeaves';
import CreateLeave from './components/Employee_Management/CreateLeave';
import LeaveDetails from './components/Employee_Management/LeaveDetails';
import EditLeave from './components/Employee_Management/EditLeave';
import Report from './components/Employee_Management/Report';
import Supermarket from './components/Employee_Management/BiscuitFactory';
import LeaveReport from './components/Employee_Management/LeaveReport';
import './style/styles.css';

import CreateSales from './components/Sales Management/create-sale.component';
import EditSales from './components/Sales Management/edit-sale.component';  
import Navbar from './components/Sales Management/navbar.component';
import SalesChart from './components/Sales Management/sales-chart.component';
import SalesList from './components/Sales Management/sales-list.component';
import AgentDetails from './components/Sales Management/AgentDetails';
import AddAgent from './components/Sales Management/AddAgent';

import AddEmployee from "./components/Payment_Management/AddEmployee";
import EditDetails from "./components/Payment_Management/EditDetails";
import EmpDetails from "./components/Payment_Management/EmpDetails";
import Lhome from "./components/Payment_Management/Lhome";
import LReport from "./components/Payment_Management/Lreport";
import './style/Lstyle.css';

class App extends Component {
  render() {
    return (
      <div className="bg">
      <BrowserRouter>

      <Route path="/" exact component={Supermarket}></Route>

      <div className="container">
        <Route path="/inventory" exact component={GHome}></Route>
        <Route path="/inventory/add" component={CreateInventory}></Route>
        <Route path="/inventory/edit/:id" component={EditInventory}></Route>
        <Route path="/inventory/:id" component={InventoryDetails}></Route>
        <Route path="/inventory/genrep" component={GenerateReport}></Route>

        <Route path="/emp" exact component={EmpHome}></Route>
        <Route path="/emp/add" exact component={CreateEmployee}></Route>
        <Route path="/emp/edit/:id" exact component={EditEmployee}></Route>
        <Route path="/emp/post/:id" exact component={EmployeeDetails}></Route>
        <Route path="/emp/report" exact component={Report}></Route>
        <Route path="/emp/leavereport" exact component={LeaveReport}></Route>
        <Route path="/emp/leave" exact component={AllLeaves}></Route>
        <Route path="/emp/leave/create" exact component={CreateLeave}></Route>
        <Route path="/emp/leave/edit/:id" exact component={EditLeave}></Route>
        <Route path="/emp/leave/post/:id" exact component={LeaveDetails}></Route>

        <Route path="/sales" exact component={SalesList}></Route>
        <Route path= "/sales/edit/:id" component={EditSales}></Route>
        <Route path="/sales/add" component={CreateSales}></Route>
        <Route path="/sales/saleschart" component={SalesChart}></Route>
        <Route path="/sales/agents" component={AgentDetails}></Route>
        <Route path="/sales/agents/add" component={AddAgent}></Route>

        <Route path="/payment/add" component={AddEmployee}></Route>
        <Route path="/payment/update/:id" component={EditDetails}></Route>
        <Route path="/payment/get/id" component={EmpDetails}></Route>
        <Route path="/payment" exact component={Lhome}></Route>
        <Route path="/payment/report" component={LReport}></Route>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
