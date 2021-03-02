import React from 'react';
import imageName from '../../assets/img/trotting_3.png';
import './Trotting.css';
const Trotting  = ({
  getTrainingFailure,
  getTrainingRequest,
  getTrainingSuccess,
  getTrainingFailureById,
  getTrainingSuccessById,
  getTrainingRequestById,
  
}) =>{



    return(
        <div style={{marginTop:"80px"}}>
            <div style={{backgroundColor:"#1bbd36",padding:"10px"}}>
                <h2><b style={{color:"white"}}>Trotting</b></h2>
            </div>
            <br/>
            <main id="main">
              <section id="trottingStatic" className="trottingStatic">
                <div className="container" >

                  <div className="row content">
                    <div className="row" style={{paddingBottom: "20px"}}>
                      <div className="col-lg-12" >
                        <img src={imageName} className="imageTrotting"/>
                      </div>
                    </div>
                    
                    {/* <div className="row">
                      <div className="col-lg-12 pt-4 pt-lg-0" >
                        <p>
                          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <ul>
                          <li><i className="fa fa-thumbs-up"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
                          <li><i className="fas fa-thumbs-up"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                          <li><i className="fas fa-thumbs-up"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
                        </ul>
                        <p className="font-italic">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </section>
            </main>
            <br/><br/>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRaceRequest: () => dispatch(getRaceRequest()),
    getRaceSuccess: (data) => dispatch(getRaceSuccess(data)),
    getRaceFailure: (error) => dispatch(getRaceFailure(error)),

    getRaceRequestById: () => dispatch(getRaceRequestById()),
    getRaceSuccessById: (data) => dispatch(getRaceSuccessById(data)),
    getRaceFailureById: (error) => dispatch(getRaceFailureById(error)),

  };
};

export default Trotting ;