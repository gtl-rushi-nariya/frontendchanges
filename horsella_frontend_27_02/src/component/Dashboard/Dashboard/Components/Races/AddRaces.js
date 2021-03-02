import React from 'react'

function AddRaces() {
    return (
        <div>
      <form class="row g-3" onSubmit="">
        <div class="col-lg-6 col-md-6">
          <label for="RaceType" class="form-label">
          Race Type
          </label>
          <input
            type="text"
            class="form-control"
            id="RaceType"
            
          />
        </div>

        <div class="col-lg-6 col-md-6">
          <label for="Title" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="Title"
            
          />
        </div>


        <div class="col-lg-6 col-md-6">
          <label for="StartDate" class="form-label">
          Start Date
          </label>
          <input
            type="date"
            class="form-control"
            id="StartDate"
            
          />
        </div>

        

        <div class="col-lg-6 col-md-6">
          <label for="EndDate" class="form-label">
          End Date
          </label>
          <input
            type="date"
            class="form-control"
            id="EndDate"
            
          />
        </div>

        

        <div class="col-lg-6 col-md-6">
          <label for="OrganizerName" class="form-label">
          Organizer Name
          </label>
          <input
            type="text"
            class="form-control"
            id="OrganizerName"
            
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
           
          />
        </div>

        

        <div class="col-lg-6 col-md-6">
          <label for="Criteria" class="form-label">
          Criteria
          </label>
          <input
            type="text"
            class="form-control"
            id="Criteria"
           
          />
        </div>

        <div class="col-lg-6 col-md-6">
          <label for="Rules" class="form-label">
          Rules
          </label>
          <input
            type="text"
            class="form-control"
            id="Rules"
           
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

export default AddRaces
