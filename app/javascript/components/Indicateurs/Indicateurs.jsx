import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';

class Indicateurs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indicateurs: []
    };
  }

  componentDidMount() {
      const url = "/api/v1/indicateurs/index";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ indicateurs: response.data1 }))
        .catch(() => this.props.history.push("/"));
  }


   render() {

    const noIndicateur = (
        <p className="fr-my-2w">Aucun indicateur</p>  
    );

    return (
      <>
      <Header />
    
      <div className="fr-container">    
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-lg-12">
          <h1 className="fr-my-5w">Liste des indicateurs MP3</h1>
          {this.state.indicateurs.length > 0 ?  
            <div className="fr-table fr-my-2w fr-table--no-caption">
              <table>
                 <caption>Liste des indicateurs MP3</caption>
                  <thead>
                      <tr>
                          <th scope="col">Indicateur</th>
                          <th scope="col">Libellé</th>
                          <th scope="col">Type</th>
                          <th scope="col">Unité</th>
                          <th scope="col">Seuil 1</th>
                          <th scope="col">Seuil 2</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.state.indicateurs.map((indicateur, index) => (
                        <tr key={index}><td>{indicateur.name}</td><td>{indicateur.description}</td><td>{indicateur.type_indicateur}</td><td>{indicateur.unite}</td><td>{indicateur.seuil_1}</td><td>{indicateur.seuil_2}</td></tr>
                          ))}
                  
                  </tbody>
              </table>
            </div>
   
              : noIndicateur }
         

            </div>
          </div>
        </div>

      <Footer />
      </>
    );
  }
}
export default Indicateurs;
