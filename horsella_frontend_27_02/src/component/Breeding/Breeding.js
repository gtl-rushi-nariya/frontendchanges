// import React,{useState,useEffect} from 'react'
// import imageName from '../../assets/img/breeding_3.png';
// import './Breeding.css';

// import { connect } from "react-redux";
// import { getBreeder,getBreederById,deleteBreeder } from '../../api/BreedingApi';
// import { getBreedingRequest,
//     getBreedingSuccess,
//     getBreedingFailure,getBreedingFailureById,getBreedingSuccessById,getBreedingRequestById, deleteBreedingRequest,deleteBreedingSuccess } from "../../Redux/Admin/Breeding/BreedingActions";

// const Breeding = () =>{
//   const [record,setRecord] = useState({
//     data:[]
// })
// useEffect(() => {

//     getData();

// }, []);

// async function getData(){
//   getBreedingRequest();
//   const res=await getBreeder();
//   getBreedingSuccess(res);

//   setRecord({data:res.map(r=>{return (  <div class="container bcontent">
//   <hr />
//   <div class="card">
//     <div class="row no-gutters">
//       <div class="col-lg-4 col-md-5">
//       <img
//                     class="card-img"
//                     src={imageName}
//                     alt="Suresh Dasari Card"
//                   />
//       </div>
//       <div class="col-lg-8 col-md-7">
//         <div class="card-body">
//           <h5 class="card-title" style={{ textAlign: "left" }}>
//             {r.center_name}
//           </h5>
//           <p class="card-text" style={{ textAlign: "left" }}>
//             Owner Name : {r.owner_name}
//             <br />
//             Location : {r.address} <br />

//           </p>

//           {/ <a href="#" class="btn btn-success"> /}
//           <button
//             class="btn btn-success"
//             onClick={() => this.GetSelectedHorse(this.props.horse.id)}
//           >
//             View Details
//           </button>

//           {/ </a> /}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>)})})
// }
//     return(
//     <div id="bred">
//         <div style={{backgroundColor:"#1bbd36",padding:"10px"}}>
//             <h2><b style={{color:"white"}}>Breeding</b></h2>
//         </div><br/>
//         <main id="main">
//               <section id="breedingStatic" className="breedingStatic">
//                 <div className="container" >

//                   <div className="row content">
//                     <div className="row" style={{paddingBottom: "20px"}}>
//                       <div className="col-lg-12" >
//                         <img src={imageName} className="imageBreeding"/>
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-lg-12 pt-4 pt-lg-0" >
//                         <p>
//                         Horse breeding is reproduction in horses, and particularly the human-directed process of selective breeding of animals, particularly purebred horses of a given breed.
//                         The male parent of a horse, a stallion, is commonly known as the sire and the female parent, the mare, is called the dam. Both are genetically important, as each parent provides half of the genetic makeup of the ensuing offspring, called a foal. Contrary to popular misuse, "colt" refers to a young male horse only; "filly" is a young female.
// 	                    Though many horse owners may simply breed a family mare to a local stallion in order to produce a companion animal, most professional breeders use selective breeding to produce individuals of a given phenotype, or breed. Alternatively, a breeder could, using individuals of differing phenotypes, create a new breed with specific characteristics.

//                         </p>
//                         <ul style={{textAlign:"left"}} id="ulModify">
//                           <li><i className="fa fa-thumbs-up"></i> Consider the mare’s overall health.</li>
//                           <li><i className="fas fa-thumbs-up"></i> Schedule a breeding soundness examination and address any problems</li>
//                           <li><i className="fas fa-thumbs-up"></i> Get the mare cycling</li>
//                         </ul>
//                         <p className="font-italic">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//                           magna aliqua.
//                         </p>
//                       </div>
//                     </div>
//                   {record.data}
//                   </div>
//                 </div>
//               </section>
//             </main>
//             <br/>
//             <br/>
//     </div>
//     );
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getBreedingRequest: () => dispatch(getBreedingRequest()),
//     getBreedingSuccess: (data) => dispatch(getBreedingSuccess(data)),
//     getBreedingFailure: (error) => dispatch(getBreedingFailure(error)),

//       getBreedingRequestById: () => dispatch(getBreedingRequestById()),
//       getBreedingSuccessById: (data) => dispatch(getBreedingSuccessById(data)),
//       getBreedingFailureById: (error) => dispatch(getBreedingFailureById(error)),

//   }
// }

// export default connect(null,mapDispatchToProps)(Breeding);
