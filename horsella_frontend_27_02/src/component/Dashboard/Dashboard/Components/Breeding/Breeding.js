import React,{useState,useEffect} from 'react';
import "../../css/table.css";
import { connect } from "react-redux";
import { getBreeder,getBreederById,deleteBreeder } from '../../../../../api/BreedingApi';
import { getBreedingRequest,
    getBreedingSuccess,
    getBreedingFailure,getBreedingFailureById,getBreedingSuccessById,getBreedingRequestById, deleteBreedingRequest,deleteBreedingSuccess } from "../../../../../Redux/Admin/Breeding/BreedingActions";
import AddBreedingCenter from './AddBreedingCenter';
  
  

function Breeding({history,getBreedingFailure,getBreedingRequest,getBreedingSuccess,getBreedingFailureById,getBreedingSuccessById,getBreedingRequestById,deleteBreedingRequest,deleteBreedingSuccess}) {


    const [record,setRecord] = useState({
        data:[]
    })
    useEffect(() => {
        
        getData();
        
    }, []);

    async function updateCenter(id){
        getBreedingRequestById();
        const res = await getBreederById(id);
        console.log(res);
        getBreedingSuccessById(res);
        history.push("/dashboard/editbreedingcenter");
    }


    async function deleteCenter(id){
        deleteBreedingRequest();
        const res = await deleteBreeder(id);
        console.log(res);
        deleteBreedingSuccess(res);
        history.push("/dashboard/deletebreedingcenter");
    }

    async function getData(){
        getBreedingRequest();
        const res=await getBreeder();
        getBreedingSuccess(res);

        setRecord({data:res.map(r=>{return (<tr><th  scope="row">{r.id}</th><td>{r.center_name}</td><td>{r.owner_name}</td><td>{r.description}</td><td>{r.email}</td><td><i onClick={updateCenter.bind(this,r.id)}  class="fas fa-edit"></i>   <i onClick={deleteCenter.bind(this,r.id)} class="fas fa-trash-alt"></i></td></tr>)})})
     }
    
     
    return (
        <div>
                <br /><br />
            
                    <table class="table table-responsive table-hover" >
                    <thead>
                    <tr>
									<th  scope="col">#</th>
									<th scope="col">Center Name</th>
									<th scope="col">Owner Name</th>
									<th scope="col">Description</th>
									<th scope="col">Email</th>
                                    <th scope="col"><i onClick={()=>{
                                    history.push("/dashboard/addbreedingcenter")
                                    }} class="fas fa-plus"></i></th>
								</tr>
                    </thead>

                    
                            <tbody>{record.data}</tbody>
                        
                    </table>
                    
               
            </div>
      
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBreedingRequest: () => dispatch(getBreedingRequest()),
        getBreedingSuccess: (data) => dispatch(getBreedingSuccess(data)),
        getBreedingFailure: (error) => dispatch(getBreedingFailure(error)),

        getBreedingRequestById: () => dispatch(getBreedingRequestById()),
        getBreedingSuccessById: (data) => dispatch(getBreedingSuccessById(data)),
        getBreedingFailureById: (error) => dispatch(getBreedingFailureById(error)),

        deleteBreedingRequest: () => dispatch(deleteBreedingRequest()),
        deleteBreedingSuccess: (data) => dispatch(deleteBreedingSuccess(data)),
        deleteBreedingFailure: (error) => dispatch(deleteBreedingFailure(error)),
    }
}

export default connect(null,mapDispatchToProps)(Breeding)
