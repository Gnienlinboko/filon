


import axios from 'axios';
import react, { useEffect, useState } from 'react';


const Categorie = () => {

 
  const [categories, setCategories] = useState([]);


  const getCategories = async () => {
    try {
      const { data } = await axios.get('http://127.0.0.1:4000/listeDesFournisseurs');
      // const { data } = await axios.get(${url}/get);
      setCategories(data);
      console.log('récupération de données:', data); // Ajout du log pour vérifier les données
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories)

    return (
      <div className="container-xxl flex-grow-1 container-p-y">
         <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Dashboard/</span> Categorie</h4>
         <center>
         <div style={{marginBottom:'10px'}}>
         <a type="button" href='/dashboard/createCategorie' class="btn btn-success">AJOUTER UN FOURNISSEUR</a>
         </div>
         </center>
         
              <div className="card">
     
      <div className="table-responsive text-nowrap">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>libelle</th>
              <th>telephone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
           
         
          {categories.length > 0 ? (
          categories.map((categorie, index) => (

            <tr>
              <td>{categorie._id}</td>
              <td>{categorie.libelle}</td>
              <td>{categorie.telephone}</td>
              <td>{categorie.email}</td>
            </tr>

          ))
          ) : (
            <p>Aucune donnée à afficher</p>
          )}

          </tbody>
        </table>
      </div>
    </div>
    </div>
    );
    }

  export default Categorie;