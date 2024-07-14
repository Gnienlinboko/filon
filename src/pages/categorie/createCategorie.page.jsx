
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const  CreateCategorie = ()=> {

  const [Fournisseurs,setFournisseurs] = useState([]);
  const [formData, setFormData] = useState({ libelle: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getFournisseurs = async (params) => {
    try {
      const {data} = await axios.get('http://127.0.0.1:4000/listeDesFournisseurs')
      setFournisseurs(data)

    } catch (error) {
    
    }
  }
  
  useEffect(() => {
    getFournisseurs();
  },[]);

  const createFournisseur = async (e) => {
    e.preventDefault();
    
    if (!formData.libelle) {
      setError("Le champ Nom est obligatoire.");
      return;
    }

    if (!formData.email) {
      setError("Le champ Email est obligatoire.");
      return;
    }

    if (!formData.telephone) {
      setError("Le champ Telephone est obligatoire.");
      return;
    }

    setError(""); // Clear any previous error

    try {
      await axios.post('http://127.0.0.1:4000/creationFournisseur', formData);
      setFormData({ libelle: "", email:"",telephone:"" });
      navigate('/dashboard/categorie')
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Fournisseurs/</span> Creer Fournisseur</h4>
        <div className="row">
          <div className="col-xl">
                      <div className="card mb-4">
                        <div className="card-body">
                          <form onSubmit={createFournisseur}>

                            <div className="row">
                              <div className="col-12">
                                <div className="mb-3">
                                <label className="form-label" for="basic-icon-default-fullname">LIBELLE</label>
                                  <div className="input-group input-group-merge">
                                    <span id="basic-icon-default-fullname2" className="input-group-text"
                                      ><i className="bx bx-user"></i
                                    ></span>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basic-icon-default-fullname"
                                      placeholder="John Doe"
                                      aria-label="John Doe"
                                      aria-describedby="basic-icon-default-fullname2"
                                      name='libelle'
                                      value={formData.libelle}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  {error && <p style={{ color: 'red' }}>{error}</p>}
                                </div>
                              </div>
                             
                            </div>
                            
                            <div className="row">
                              <div className="col-6">
                              <div className="mb-3">
                              <label className="form-label" for="basic-icon-default-email">Email</label>
                              <div className="input-group input-group-merge">
                                <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                                <input
                                  type="text"
                                  id="basic-icon-default-email"
                                  className="form-control"
                                  placeholder="john.doe"
                                  aria-label="john.doe"
                                  aria-describedby="basic-icon-default-email2"
                                  name='email'
                                  value={formData.email}
                                  onChange={handleInputChange}
                                />
                                <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                              </div>
                              <div className="form-text">You can use letters, numbers & periods</div>
                            </div>
                              </div>

                              <div className="col-6">
                                
                              <div className="mb-3">
                                <label className="form-label" for="basic-icon-default-phone">Numero Telephone</label>
                                <div className="input-group input-group-merge">
                                  <span id="basic-icon-default-phone2" className="input-group-text"
                                    ><i className="bx bx-phone"></i
                                  ></span>
                                  <input
                                    type="text"
                                    id="basic-icon-default-phone"
                                    className="form-control phone-mask"
                                    placeholder="658 799 8941"
                                    aria-label="658 799 8941"
                                    aria-describedby="basic-icon-default-phone2"
                                    name='telephone'
                                    value={formData.telephone}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                               
                              </div>
                            </div>
                            
                            
                            
                           
                            {/* <button type="submit" className="btn btn-primary">Annuler</button> */}
                            <button type="submit" className="btn btn-primary">Enregistre</button>
                          </form>
                        </div>
                      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCategorie;
