import React, { Component } from "react";
import horses from "../../../demoContent";
import imageName from "../../../assets/img/group.png";

class BuyHorse extends Component {
  state = {
    loadedPosts: null,
  };
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPosts ||
        (this.state.loadedPosts &&
          this.state.loadedPosts.id != this.props.match.params.id)
      ) {
        const horse = horses.find(
          (horse) => (horse.id = this.props.match.params.id)
        );
        this.setState({ loadedPosts: horse });
      }
    }
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Horse</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.loadedPosts) {
      post = (
        <div style={{ marginTop: "80px", marginBottom: "30px" }}>
          <div style={{ backgroundColor: "#1bbd36", padding: "10px" }}>
            <h2>
              <b style={{ color: "white" }}>
                Ownership- Buy {this.state.loadedPosts.name}
              </b>
            </h2>
          </div>
          <br />
          <div class="row">
            <div class="col-md-6">
              <div class="row mx-4">
                <div class="col-12">
                  <figure class="view overlay rounded z-depth-1 main-img">
                    <img src={imageName} class="img-fluid z-depth-1" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <h5>{this.state.loadedPosts.name}</h5>
              <p>
                <span>
                  <strong>{this.state.loadedPosts.price}</strong>
                </span>
              </p>

              <div class="table-responsive">
                <table class="table table-sm table-borderless mb-0">
                  <tbody>
                    <tr>
                      <th class="pl-0 w-25" scope="row">
                        <strong>Discipine</strong>
                      </th>
                      <td>{this.state.loadedPosts.mainDiscipline}</td>
                    </tr>
                    <tr>
                      <th class="pl-0 w-25" scope="row">
                        <strong>Color</strong>
                      </th>
                      <td>{this.state.loadedPosts.color}</td>
                    </tr>
                    <tr>
                      <th class="pl-0 w-25" scope="row">
                        <strong>Age</strong>
                      </th>
                      <td>{this.state.loadedPosts.age}</td>
                    </tr>
                    <tr>
                      <th class="pl-0 w-25" scope="row">
                        <strong>Breed Type</strong>
                      </th>
                      <td>{this.state.loadedPosts.breedType}</td>
                    </tr>
                    <tr>
                      <th class="pl-0 w-25" scope="row">
                        <strong>Height</strong>
                      </th>
                      <td>{this.state.loadedPosts.height}</td>
                    </tr>
                    <tr>
                      <th class="pl-0 w-25" scope="row">
                        <strong>price</strong>
                      </th>
                      <td>{this.state.loadedPosts.price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              {/* <a href="/Products/Edit/@Model.Id" class="btn btn-success">
                Edit
              </a>
              <a href="/Products/Delete/@Model.Id" class="btn btn-danger">
                Delete
              </a> */}
            </div>
          </div>
          <div class="row" style={{ margin: "0 80px" }}>
            <span>
              <strong>Discription</strong>
            </span>
            <p>{this.state.loadedPosts.description}</p>
          </div>
        </div>
      );
    }
    return post;
    // const horse = horses.find(
    //   (horse) => (horse.id = this.props.match.params.id)
    // );

    // return (

    // );
  }
}

export default BuyHorse;
