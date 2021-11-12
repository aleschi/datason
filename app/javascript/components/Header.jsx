import React from "react";
import logoUrl from '../../assets/images/logo_ministere2.svg';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	      isLoggedIn: false,
	      isAdmin: false,
	     };
	    this.handleLogout = this.handleLogout.bind(this);
	}

	
    componentDidMount() {
      const url = "/check_user_status";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ isLoggedIn: response.isLoggedIn, isAdmin: response.isAdmin }))
        .catch(error => console.log(error));
  }

    handleLogout = () => {
	    const url = "/checkout";
	    fetch(url)
	      .then(response => {
	        if (response.ok) {
	          return response.json();
	        }
	        throw new Error("Network response was not ok.");
	      })
	      .then(response => this.setState({ isLoggedIn: false, isAdmin: false }))
	    .catch(error => console.log(error));
	  }
    render() {
    return (  
		<div>
		  	<div className="logo_header">
		    	<img src={logoUrl} alt="DB" />
		  	</div>
		  	<div className="nav_header_box">
			  	<div className="nav_header">
			  		<div className="nav_link"><NavLink exact to='/' activeClassName="nav_link nav_link_active">Cartographie des services exécutants</NavLink></div>
			  		<div className="nav_link"><NavLink exact to='/cartographie_performance' activeClassName="nav_link nav_link_active">Cartographie des performances</NavLink></div>
			  		<div className="nav_link"><NavLink exact to='/indicateur_executions' activeClassName="nav_link nav_link_active">Suivi des indicateurs</NavLink></div>
			  		<div className="nav_link"><NavLink exact to='/indicateurs' activeClassName="nav_link nav_link_active">Liste des indicateurs</NavLink></div>
			  		{this.state.isAdmin ? <div className="nav_link"><NavLink exact to='/indicateur_executions/new' activeClassName="nav_link nav_link_active">Ajouter un document</NavLink></div> : null }
			  		
			  		{this.state.isLoggedIn ? <div className="nav_link"><button  onClick={this.handleLogout} >Se déconnecter</button></div> : null }
			  		

			  	</div>
		  	</div>
	    </div>
    );
    }
}

export default Header;


