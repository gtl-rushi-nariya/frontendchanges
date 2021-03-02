import React from "react";
import imageName from "../../assets/img/group.png";
import horses from "../../demoContent";
import BuyHorses from "./BuyHorses/BuyHorses";
import "./Ownership.css";

const Ownership = (props) => {
  // const horseList = horses.map((horse) => {
  //   return <BuyHorses key={horse.id} horse={horse} />;
  // });
  // console.log(props);
  return (
    <div style={{ marginTop: "80px" }}>
      <div style={{ backgroundColor: "#1bbd36", padding: "10px" }}>
        <h2>
          <b style={{ color: "white" }}>Ownership</b>
        </h2>
      </div>
      <br />
      <main id="main">
        <section id="ownershipStatic" className="ownershipStatic">
          <div className="container">
            <div className="row content">
              <div className="row" style={{ paddingBottom: "20px" }}>
                <div className="col-lg-12">
                  <img src={imageName} className="imageOwnership" />
                </div>
              </div>

              {/* {horseList} */}
              <div className="row">
                <div className="col-lg-12 pt-4 pt-lg-0">
                  <h3>How to find the horse </h3>
                  <p>
                    Many prospective horse owners contact a trotting trainer to
                    get help before the purchase. Trainers generally also have
                    good contacts with breeders, for those who are looking for a
                    young horse. It is increasingly common for horses to be sold
                    in consortia and shares, ie several people own the horse
                    together. First second … Several trotting sites on the
                    internet have buying and selling forums. Advertisements are
                    also available in trade magazines. A few times a year,
                    including in connection with the Elite Race in the spring
                    and the Swedish Trotting Criterium in the autumn, trotting
                    horse auctions are arranged in Sweden. Young horses are
                    usually sold, but on occasion occasional competition horses
                    and foals are also offered. Really promising horses
                    generally get expensive at the auctions, but there are
                    several examples of stars being called in for low amounts.
                    Trotting horses are also sold via internet-based auctions.
                  </p>
                  <h3>Advisor recommended</h3>
                  <p>
                    Riding around and looking at different horses takes a lot of
                    time. Not least for the inexperienced who do not know all
                    the parameters, such as exterior and pedigree, which play a
                    major role. An advisor at the time of purchase is
                    invaluable. Maybe there is a horse-savvy friend in the
                    circle of acquaintances? As mentioned earlier, it is also
                    possible to turn to a trotting coach for help.
                  </p>
                  <p className="font-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <br />
      <br />
    </div>
  );
};
export default Ownership;
