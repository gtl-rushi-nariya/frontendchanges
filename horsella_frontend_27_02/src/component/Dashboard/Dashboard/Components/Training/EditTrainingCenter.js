import React,{useState} from 'react';
import { connect } from "react-redux";
import { updateTrainer } from "../../../../../api/TrainingApi";
import { updateTrainingRequest,
  updateTrainingSuccess,
  updateTrainingFailure } from "../../../../../Redux/Admin/Training/TrainingActions";


function EditTrainingCenter({
  updateTrainingRequest,
  updateTrainingSuccess,
  updateTrainingFailure,
  token,
  history,data
}) {
  const dt = data
if(dt == null){

}
  const [center_name,setCenterName] = useState(dt?dt.center_name:null);
  const [description,setDescription] = useState(dt?dt.description:null);
  const [owner_name,setOwnerName] = useState(dt?dt.owner_name:null);
  const [experience,setExperience] = useState(dt?dt.experience:null);
  const [address,setAddress] = useState(dt?dt.address:null);
  const [email,setEmail] = useState(dt?dt.email:null);
  const [website,setWebsite] = useState(dt?dt.website:null);
  const [contact,setContact] = useState(dt?dt.contact:null);
  const [working_hours,setWorkingHours] = useState(dt?dt.working_hours:null);
  const [image,setImage] = useState();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
      // Details of the uploaded file
      console.log(image);
    updateTrainingRequest();
    const res = await updateTrainer(
      data.id,{
        centerName : center_name,
        description:description,
        ownerName:owner_name,
        experience : experience,
        address:address,
        email:email,
        website:website,
        contact:contact,
        workingHours:working_hours,
        
      }
    );
    console.log(res);
    if(typeof res != "string"){
      updateTrainingSuccess(res);
  }
  else{
    updateTrainingFailure(res);
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
            value={center_name}
            onChange={(e) => {
                console.log("f",e.target.value)
                setCenterName(e.target.value)}}
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
            value={address}
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
            value={description}
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
            value={email}
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
            value={website}
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
            value={owner_name}
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
            value={experience}
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
            value={working_hours}
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
            value={contact}
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
           Save
          </button>
        </div>
      </form>
    </div>
    )
}

const mapStateToProps = (state) => {
    //console.log(state.trainingreducer.data)
  return {
    data: state.trainingreducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTrainingRequest: () => dispatch(updateTrainingRequest()),
    updateTrainingSuccess: (data) => dispatch(updateTrainingSuccess(data)),
    updateTrainingFailure: (error) => dispatch(updateTrainingFailure(error)),

   
  };
};




export default connect(mapStateToProps,mapDispatchToProps)(EditTrainingCenter)
