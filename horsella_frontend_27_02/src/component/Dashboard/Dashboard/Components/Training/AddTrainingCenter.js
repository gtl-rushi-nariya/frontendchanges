import React,{useState} from 'react';
import { connect } from "react-redux";
import { postTrainer } from "../../../../../api/TrainingApi";
import { postTrainingRequest,
  postTrainingSuccess,
  postTrainingFailure } from "../../../../../Redux/Admin/Training/TrainingActions";


function AddTrainingCenter({
  postTrainingRequest,
  postTrainingSuccess,
  postTrainingFailure,
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
    const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "image",
        image,
        image.name
      );
    
      // Details of the uploaded file
      console.log(image);
    postTrainingRequest();
    const res = await postTrainer(
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
      postTrainingSuccess(res);
  }
  else{
    postTrainingFailure(res);
  }
    history.push("/dashboard/training");
  };


    return (
        <div>
      <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-lg-6 col-md-6">
          <label for="CenterName" class="form-label">
          Training Center Name
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
    postTrainingRequest: () => dispatch(postTrainingRequest()),
    postTrainingSuccess: (data) => dispatch(postTrainingSuccess(data)),
    postTrainingFailure: (error) => dispatch(postTrainingFailure(error)),

   
  };
};




export default connect(mapStateToProps,mapDispatchToProps)(AddTrainingCenter)
