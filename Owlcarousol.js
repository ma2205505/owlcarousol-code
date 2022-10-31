import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


//////////// center carousol style of pic///////
//.set{
//   width: 300px;
//   height: 200px;
// }

// import React, { Component } from "react";
// import Slider from "react-slick";

//   export default class SimpleSlider extends Component {
//     render() {

//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 3,
//       speed: 500
     
      
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//            <img className="set" src='https://www.logodesign.net/images/home-page-logo-03.png' alt=''></img>
//           </div>
//           <div>
//           <img className="set" src='https://www.logodesign.net/images/home-page-logo-03.png' alt=''></img>
//           </div>
//           <div>
//           <img className="set" src='https://www.logodesign.net/images/home-page-logo-03.png' alt=''></img>
//           </div>
//           <div>
//           <img className="set" src='https://www.logodesign.net/images/home-page-logo-03.png' alt=''></img>
//           </div>
//           <div>
//           <img className="set" src='https://www.logodesign.net/images/home-page-logo-03.png' alt=''></img>
//           </div>
//           <div>
//           <img className="set" src='https://www.logodesign.net/images/home-page-logo-03.png' alt=''></img>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }




//////////// Responsive carousol style of pic///////
//.set{
//   width: 200px;
//   height: 200px;
// }

import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <h3> <img className="set" src='https://www.logodesign.net/images/home-page-logo-03.png' alt=''></img></h3>
          </div>
          <div>
            <h3> <img className="set" src='https://www.logodesign.net/images/home-page-logo-03.png' alt=''></img></h3>
          </div>
          <div>
            <h3> <img className="set" src='https://www.logodesign.net/images/home-page-logo-03.png' alt=''></img></h3>
          </div>
          <div>
            <h3> <img className="set" src='https://www.logodesign.net/images/home-page-logo-03.png' alt=''></img></h3>
          </div>
          <div>
            <h3> <img className="set" src='https://www.logodesign.net/images/home-page-logo-03.png' alt=''></img></h3>
          </div>
          <div>
            <h3> <img className="set" src='https://www.logodesign.net/images/home-page-logo-03.png' alt=''></img></h3>
          </div>
          <div>
            <h3> <img className="set" src='https://www.logodesign.net/images/home-page-logo-03.png' alt=''></img></h3>
          </div>
          <div>
            <h3> <img className="set" src='https://www.logodesign.net/images/home-page-logo-03.png' alt=''></img></h3>
          </div>
        </Slider>
      </div>
    );
  }
}
