import React from "react";

const Banner = ({head, para, but, img1, img2, img3, logo}) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>{head}</h1>
        <p>
          {para}
        </p>
        <button>{but}</button>
      </div>
      <div className="banner-images">
				<img className='left' src={img1} alt='left' />
				<img className='top' src={img2} alt='top' />
				<img className='right' src={img3} alt='right' />
				<div className='logo'>
					<img src={logo} alt='bottom' />
				</div>
				
			</div>
    </div>
  );
};

export default Banner;
