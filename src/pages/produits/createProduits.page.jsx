


import react from 'react';


const CreateProduit = () => {



    return (
 


         <div className="container-xxl flex-grow-1 container-p-y">
  <h4 className="fw-bold py-3 mb-4">
    <span className="text-muted fw-light">Produit/</span> Creer Produit
  </h4>
  {/* Basic Layout */}
  <div className="row">
    <div className="col-xl">
      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
  
          <small className="text-muted float-end">Default label</small>
        </div>
        <div className="card-body">
         
        
        <form>

                    <div className="row">
                        <div className="col-6">
                            <label className="form-label" htmlFor="basic-icon-default-fullname"> Nom </label>
                            <div className="input-group input-group-merge">
                                <span id="basic-icon-default-fullname2" className="input-group-text" >
                                    <i className="bx bx-user" />
                                </span>

                                <input type="text"
                                    className="form-control"
                                    id="basic-icon-default-fullname"
                                    placeholder="John Doe"
                                    aria-label="John Doe"
                                    aria-describedby="basic-icon-default-fullname2"
                                />
                            </div>
                        </div>

                        <div className="col-6">
                        <label className="form-label" htmlFor="basic-icon-default-fullname"> Prénom(s) </label>
                        <div className="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" className="input-group-text" >
                                <i className="bx bx-user" />
                            </span>

                            <input type="text"
                                className="form-control"
                                id="basic-icon-default-fullname"
                                placeholder="John Doe"
                                aria-label="John Doe"
                                aria-describedby="basic-icon-default-fullname2"
                            />
                        </div>
                    </div>
                    </div>

                    <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor="basic-icon-default-company"
                    >
                       Entreprise
                    </label>
                    <div className="input-group input-group-merge">
                        <span
                        id="basic-icon-default-company2"
                        className="input-group-text"
                        >
                        <i className="bx bx-buildings" />
                        </span>
                        <input
                        type="text"
                        id="basic-icon-default-company"
                        className="form-control"
                        placeholder="ACME Inc."
                        aria-label="ACME Inc."
                        aria-describedby="basic-icon-default-company2"
                        />
                    </div>
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="basic-icon-default-email">
                        Email
                    </label>
                    <div className="input-group input-group-merge">
                        <span className="input-group-text">
                        <i className="bx bx-envelope" />
                        </span>
                        <input
                        type="text"
                        id="basic-icon-default-email"
                        className="form-control"
                        placeholder="john.doe"
                        aria-label="john.doe"
                        aria-describedby="basic-icon-default-email2"
                        />
                        <span
                        id="basic-icon-default-email2"
                        className="input-group-text"
                        >
                        @example.com
                        </span>
                    </div>
                    <div className="form-text">
                        You can use letters, numbers &amp; periods
                    </div>
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="basic-icon-default-phone">
                      TELEPHONE
                    </label>
                    <div className="input-group input-group-merge">
                        <span
                        id="basic-icon-default-phone2"
                        className="input-group-text"
                        >
                        <i className="bx bx-phone" />
                        </span>
                        <input
                        type="text"
                        id="basic-icon-default-phone"
                        className="form-control phone-mask"
                        placeholder="658 799 8941"
                        aria-label="658 799 8941"
                        aria-describedby="basic-icon-default-phone2"
                        />
                    </div>
                    </div>
                    <div className="mb-3">
                    <label
                        className="form-label"
                        htmlFor="basic-icon-default-message"
                    >
                        Message
                    </label>
                    <div className="input-group input-group-merge">
                        <span
                        id="basic-icon-default-message2"
                        className="input-group-text"
                        >
                        <i className="bx bx-comment" />
                        </span>
                        <textarea
                        id="basic-icon-default-message"
                        className="form-control"
                        placeholder="Hi, Do you have a moment to talk Joe?"
                        aria-label="Hi, Do you have a moment to talk Joe?"
                        aria-describedby="basic-icon-default-message2"
                        defaultValue={""}
                        />
                    </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Enregistrer
                    </button>
                </form>
        



        </div>
      </div>
    </div>
   
  </div>
</div>





       
         
 
    );
    }

  export default CreateProduit;