import React from "react";
import landingImage from "../../images/hottakes2.jpg";

const style = {
  stylyContainer: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${landingImage})`
  },
  bodyContainer: {
    padding: "25vh 0 10vh 0",
    width: "100%",
    backgroundPositionY: "-20vh"
  },
  styleContent: {
    backgroundColor: "rgb(204, 230, 255, .8)",
    height: "100%",
    width: "100%",
    color: "black",
    paddingTop: "2vh",
    paddingBottom: "2vh",
    textAlign: 'center'
  }
};

const Home = () => {
  return (
    <div style={style.stylyContainer}>
      <div style={style.bodyContainer}>
        <div style={style.styleContent}>
          <h1>Welcome to Sports Hot Takes</h1>
          <a class="waves-effect waves-light btn-large blue accent-3">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
