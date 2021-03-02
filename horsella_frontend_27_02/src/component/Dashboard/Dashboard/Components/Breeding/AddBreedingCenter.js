import React,{useState} from 'react';
import { connect } from "react-redux";
import { postBreeder } from "../../../../../api/BreedingApi";
import { postBreedingRequest,
  postBreedingSuccess,
  postBreedingFailure } from "../../../../../Redux/Admin/Breeding/BreedingActions";


function AddBreedingCenter({
  postBreedingRequest,
  postBreedingSuccess,
  postBreedingFailure,
  token,
  history,
}) {
  

  const [center_name,setCenterName] = useState();
  const [description,setDescription] = useState();
  const [owner_name,setOwnerName] = useState();
  const [experience,setExperience] = useState();
  const [address,setAddress] = useState();
  const [email,setEmail] = useState();
  const [website,setWebsite] = useState();
  const [contact,setContact] = useState();
  const [working_hours,setWorkingHours] = useState();
  const [image,setImage] = useState();


  const handleSubmit = async (e) => {
    e.preventDefault();
   
    
      // Details of the uploaded file
      console.log(image);
    postBreedingRequest();
    const res = await postBreeder(
      {
        centerName : center_name,
        description:description,
        ownerName:owner_name,
        experience : experience,
        address:address,
        email:email,
        website:website,
        contact:contact,
        workingHours:working_hours,
        image: image
      }
    );
    console.log(res);
    if(typeof res != "string"){
      postBreedingSuccess(res);
  }
  else{
    postBreedingFailure(res);
  }
    history.push("/dashboard/breeding");
  };


    return (
        <div>
      <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-lg-6 col-md-6">
          <label for="CenterName" class="form-label">
          Breeding Center Name
          </label>
          <input
            type="text"
            class="form-control"
            id="CenterName"
            onChange={(e) => setCenterName(e.target.value)}
          />
        </div>

        <div class="col-lg-6 col-md-6">
          <label for="Address" class="form-label">
          Address
          </label>
          <input
            type="text"
            class="form-control"
            id="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div class="col-lg-6 col-md-6">
          <label for="Description" class="form-label">
          Description
          </label>
          <input
            type="text"
            class="form-control"
            id="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div class="col-lg-6 col-md-6">
          <label for="Email" class="form-label">
          Email
          </label>
          <input
            type="text"
            class="form-control"
            id="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="col-lg-6 col-md-6">
          <label for="Website" class="form-label">
         Website
          </label>
          <input
            type="text"
            class="form-control"
            id="Website"
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        

        <div class="col-lg-6 col-md-6">
          <label for="OwnerName" class="form-label">
          Owner Name
          </label>
          <input
            type="text"
            class="form-control"
            id="OwnerName"
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>

        <div class="col-lg-6 col-md-6">
          <label for="Experience" class="form-label">
            Experience(in years)
          </label>
          <input
            type="text"
            class="form-control"
            id="Experience"
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>


        <div class="col-lg-6 col-md-6">
          <label for="WorkingHours" class="form-label">
          Working Hours
          </label>
          <input
            type="text"
            class="form-control"
            id="WorkingHours"
            onChange={(e) => setWorkingHours(e.target.value)}
          />
        </div>

        <div class="col-lg-6 col-md-6">
          <label for="Contact" class="form-label">
            Contact
          </label>
          <input
            type="text"
            class="form-control"
            id="Contact"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        
        <div class="col-lg-6 col-md-6">
          <label for="image" class="form-label">
            Image
          </label>
          <input
            type="file"
            class="form-control"
            id="image"
            name="image"
            onChange={(e) => {
              console.log(e.target.files[0])
              setImage(e.target.files[0])}}
          />
        </div>
        

        <div class="col-12">
          <br />
          <button type="submit" class="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
    )
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postBreedingRequest: () => dispatch(postBreedingRequest()),
    postBreedingSuccess: (data) => dispatch(postBreedingSuccess(data)),
    postBreedingFailure: (error) => dispatch(postBreedingFailure(error)),

   
  };
};




export default connect(mapStateToProps,mapDispatchToProps)(AddBreedingCenter)
