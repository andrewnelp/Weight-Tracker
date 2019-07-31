// import React from "react";
// import app from "../base";
import Nav from "../components/Nav";
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="Nav">
            <Nav />
          </div>
        </div>
        <>
          <h1>
            Home<span class="badge badge-secondary">New</span>
          </h1>
          <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </>
      </div>
    );
  }
}

// const Home = () => {
//   return (
//     <>
//       <h1>Home</h1>
//       <button onClick={() => app.auth().signOut()}>Sign out</button>
//     </>
//   );
//    render() {
//     return (
//       <div className="App">
//         <div className="Nav">
//           <Nav />
//         </div>
//       </div>
//     );
//   }
// };

export default Home;
