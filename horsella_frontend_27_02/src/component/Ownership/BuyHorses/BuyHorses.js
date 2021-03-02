import React, { Component } from "react";
import imageName from "../../../assets/img/group.png";
import horses from "../../../demoContent";
import { withRouter } from "react-router-dom";

class BuyHorse extends Component {
  GetSelectedHorse = (id) => {
    this.props.history.push("/horse/" + id);
  };

  render() {
    console.log(this.props);
    return (
      <div class="container bcontent">
        <hr />
        <div class="card">
          <div class="row no-gutters">
            <div class="col-lg-4 col-md-5">
              <img class="card-img" src={imageName} alt="Suresh Dasari Card" />
            </div>
            <div class="col-lg-8 col-md-7">
              <div class="card-body">
                <h5 class="card-title" style={{ textAlign: "left" }}>
                  {this.props.horse.name}
                </h5>
                <p class="card-text" style={{ textAlign: "left" }}>
                  Main discipline : {this.props.horse.mainDiscipline}
                  <br />
                  Location : {this.props.horse.location} <br />
                  Breed Type : {this.props.horse.breedType} <br />
                </p>

                {/* <a href="#" class="btn btn-success"> */}
                <button
                  class="btn btn-success"
                  onClick={() => this.GetSelectedHorse(this.props.horse.id)}
                >
                  Buy
                </button>

                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // <div>
  //   <div className="col-lg-12">
  //     {/* <p>
  //                 Horse breeding is reproduction in horses, and particularly
  //                 the human-directed process of selective breeding of animals,
  //                 particularly purebred horses of a given breed. The male
  //                 parent of a horse, a stallion, is commonly known as the sire
  //                 and the female parent, the mare, is called the dam. Both are
  //                 genetically important, as each parent provides half of the
  //                 genetic makeup of the ensuing offspring, called a foal.
  //                 Contrary to popular misuse, "colt" refers to a young male
  //                 horse only; "filly" is a young female. Though many horse
  //                 owners may simply breed a family mare to a local stallion in
  //                 order to produce a companion animal, most professional
  //                 breeders use selective breeding to produce individuals of a
  //                 given phenotype, or breed. Alternatively, a breeder could,
  //                 using individuals of differing phenotypes, create a new
  //                 breed with specific characteristics.
  //               </p>
  //               <ul style={{ textAlign: "left" }} id="ulModify">
  //                 <li>
  //                   <i className="fa fa-thumbs-up"></i> Consider the mare’s
  //                   overall health.
  //                 </li>
  //                 <li>
  //                   <i className="fas fa-thumbs-up"></i> Schedule a breeding
  //                   soundness examination and address any problems
  //                 </li>
  //                 <li>
  //                   <i className="fas fa-thumbs-up"></i> Get the mare cycling
  //                 </li>
  //               </ul>
  //               <p className="font-italic">
  //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  //                 do eiusmod tempor incididunt ut labore et dolore magna
  //                 aliqua.
  //               </p> */}

  //     <div class="container bcontent">
  //       <hr />
  //       <div class="card">
  //         <div class="row no-gutters">
  //           <div class="col-lg-4 col-md-5">
  //             <img
  //               class="card-img"
  //               src={imageName}
  //               alt="Suresh Dasari Card"
  //             />
  //           </div>
  //           <div class="col-lg-8 col-md-7">
  //             <div class="card-body">
  //               <h5 class="card-title">Suresh Dasari</h5>
  //               <p class="card-text">
  //                 Suresh Dasari is a founder and technical lead developer in
  //                 tutlane.Suresh Dasari is a founder and technical lead
  //                 developer in tutlane.Suresh Dasari is a founder and
  //                 technical lead developer in tutlane.
  //               </p>
  //               <a href="#" class="btn btn-success">
  //                 Buy
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div class="container bcontent">
  //       <hr />
  //       <div class="card">
  //         <div class="row no-gutters">
  //           <div class="col-lg-4 col-md-5">
  //             <img
  //               class="card-img"
  //               src={imageName}
  //               alt="Suresh Dasari Card"
  //             />
  //           </div>
  //           <div class="col-lg-8 col-md-7">
  //             <div class="card-body">
  //               <h5 class="card-title">Suresh Dasari</h5>
  //               <p class="card-text">
  //                 Suresh Dasari is a founder and technical lead developer in
  //                 tutlane.Suresh Dasari is a founder and technical lead
  //                 developer in tutlane.Suresh Dasari is a founder and
  //                 technical lead developer in tutlane.
  //               </p>
  //               <a href="#" class="btn btn-success">
  //                 Buy
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div class="container bcontent">
  //       <hr />
  //       <div class="card">
  //         <div class="row no-gutters">
  //           <div class="col-lg-4 col-md-5">
  //             <img
  //               class="card-img"
  //               src={imageName}
  //               alt="Suresh Dasari Card"
  //             />
  //           </div>
  //           <div class="col-lg-8 col-md-7">
  //             <div class="card-body">
  //               <h5 class="card-title">Suresh Dasari</h5>
  //               <p class="card-text">
  //                 Suresh Dasari is a founder and technical lead developer in
  //                 tutlane.Suresh Dasari is a founder and technical lead
  //                 developer in tutlane.Suresh Dasari is a founder and
  //                 technical lead developer in tutlane.
  //               </p>
  //               <a href="#" class="btn btn-success">
  //                 Buy
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div class="container bcontent">
  //       <hr />
  //       <div class="card">
  //         <div class="row no-gutters">
  //           <div class="col-lg-4 col-md-5">
  //             <img class="card-img" src={imageName} alt="Horse" />
  //           </div>
  //           <div class="col-lg-8 col-md-7">
  //             <div class="card-body">
  //               <h5 class="card-title" style={{ textAlign: "left" }}>
  //                 LISBERGS BELLE BELANA, Mare, 3 Years, Black
  //               </h5>
  //               <p class="card-text" style={{ textAlign: "left" }}>
  //                 Main discipline : Jumping, Dressage Breeding
  //                 <br />
  //                 Location : Germany <br />
  //                 Breed Type : Thoroughbred <br />
  //               </p>
  //               <a href="#" class="btn btn-success">
  //                 Buy
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
}

export default withRouter(BuyHorse);
