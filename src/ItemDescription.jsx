import img from "./assets/imgs/photo-1593487568720-92097fb460fb.jpeg"
import Stars from "./Stars"
function FullItemDescription() {
  return (
    <>
      <div className='contents'>
        <div className='itemDescrip '>
          <div className='itemImg'>
            <img src={img} alt='img' />
          </div>

          <div className='itemDescript'>
            <h1 className='itemName'>Airpods-Max</h1>
            <span className='descrip'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloremque, eius voluptas ipsum impedit architecto?</span>

            <div className='rating'>
              <span className='stars'>
                <Stars rating={4} />
              </span>
              <span className='rateNum'>(121)</span>
            </div>
            <hr />
            <div className='amount'>
              <h2 className='pay'>$549 0r $99.99/month</h2>
              <span>suggested payments with 6 months special financing</span>
            </div>
            <hr />
            <div className='buyNow'>
              <div className='top'>
                <div className='quantity'>
                  <span className='btn'>
                    <svg height='12px' id='Layer_1' version='1.1' viewBox='0 0 512 512' width='12px' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z' />
                    </svg>
                  </span>
                  <span>1</span>
                  <span className='btn'>
                    <svg height='12px' id='Layer_1' version='1.1' viewBox='0 0 512 512' width='12px' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M417.4,224H288V94.6c0-16.9-14.3-30.6-32-30.6c-17.7,0-32,13.7-32,30.6V224H94.6C77.7,224,64,238.3,64,256  c0,17.7,13.7,32,30.6,32H224v129.4c0,16.9,14.3,30.6,32,30.6c17.7,0,32-13.7,32-30.6V288h129.4c16.9,0,30.6-14.3,30.6-32  C448,238.3,434.3,224,417.4,224z' />
                    </svg>
                  </span>
                </div>
                <div className='info'>
                  <p>
                    <span>Only </span>
                    <span style={{ color: "#1ab91f", fontWeight: 700 }}>12 items</span>
                    <span> left!</span>
                  </p>
                  <span>Dont miss it!</span>
                </div>
              </div>
              <div className='btns'>
                <button className='buy'>Buy Now</button>
                <button className='cart'>Add to Cart</button>
              </div>
            </div>
            <div className='delivery'>
              <div className='deliver'>
                <span>
                  <svg data-name='019_transport' id='_019_transport' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <defs></defs>
                    <path className='cls-1' d='M7,22a3,3,0,1,1,3-3A3,3,0,0,1,7,22Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,7,18Z' />
                    <path className='cls-1' d='M18,22a3,3,0,1,1,3-3A3,3,0,0,1,18,22Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,18,18Z' />
                    <path className='cls-1' d='M16,20H9a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Z' />
                    <path className='cls-1' d='M5,20H4a2,2,0,0,1-2-2V10A3,3,0,0,1,5,7H15a7,7,0,0,1,7,7v1a1,1,0,0,1-2,0V14a5,5,0,0,0-5-5H5a1,1,0,0,0-1,1v8H5a1,1,0,0,1,0,2Z' />
                    <path className='cls-1' d='M20,14H14a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z' />
                    <path className='cls-1' d='M20.91,13A6,6,0,0,0,17,8.35V13Z' />
                  </svg>
                </span>
                <span>
                  <p>Free Delivery</p>
                  <span>Enter your postal code for Delivery Availability</span>
                </span>
              </div>
              <hr />
              <div className='deliver'>
                <span>
                  <svg id='Icons' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <defs></defs>
                    <path
                      className='cls-1'
                      d='M20,2H19V1a1,1,0,0,0-2,0V2H7V1A1,1,0,0,0,5,1V2H4A4,4,0,0,0,0,6V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V6A4,4,0,0,0,20,2Zm2,18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H5V5A1,1,0,0,0,7,5V4H17V5a1,1,0,0,0,2,0V4h1a2,2,0,0,1,2,2Z'
                    />
                    <path className='cls-1' d='M19,7H5A1,1,0,0,0,5,9H19a1,1,0,0,0,0-2Z' />
                    <path className='cls-1' d='M7,12H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z' />
                    <path className='cls-1' d='M7,17H5a1,1,0,0,0,0,2H7a1,1,0,0,0,0-2Z' />
                    <path className='cls-1' d='M13,12H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z' />
                    <path className='cls-1' d='M13,17H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z' />
                    <path className='cls-1' d='M19,12H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z' />
                    <path className='cls-1' d='M19,17H17a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z' />
                  </svg>
                </span>
                <span>
                  <p>Return Delivery</p>
                  <span>Free 30days Delivery Returns. Details</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default FullItemDescription
