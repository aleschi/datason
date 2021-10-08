import React from "react";

export default ({ handleChange, handleSubmit, indicateurs, service_executants }) => {
	
	    return (

	    <div className="indicateurs_search_box">
			<div className="box_etiquette">
				<div className="titre_etiquette text-center">Ma recherche </div>
				<div className="d12"></div>
				<form onSubmit={handleSubmit}>
				<div className="texte_etiquette formw">Je souhaite visualiser 
				<select name="search_indicateur" onChange={handleChange}>
					{indicateurs.map((indicateur, index) => (
		              <option key={index} value={indicateur.name}>{indicateur.name}</option>
		            ))}
				</select></div>

				<div className="d12"></div>
				<div className="texte_etiquette formw">Concernant les 
				<select>					
		            <option value="Ministere">Services Executants</option>
		            <option value="Ministere">Ministères</option>
		            <option value="Ministere">BLOC</option>
		            <option value="Ministere">TYPE</option>		            
				</select></div>

				<div className="d12"></div>
				<div className="texte_etiquette formw">
				Ma recherche concerne 
				
					{service_executants.map((service, index) => (
						<label key={index}>{service.libelle}
						<input type="checkbox" name="search_service_executants" onChange={handleChange} id={service.libelle} value={service.libelle} />
						</label>
		            ))}
			
				</div>
				<div className="d24"></div>
				<button className="bouton" type="submit">Valider</button>
				</form>
			</div>  
	    </div>
	    
	    );

};
