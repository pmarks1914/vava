import React, { Component} from 'react';
import { CardImg } from 'reactstrap';
import './hiw.css';


const hiw1 = require('../../assets/img/hiw/choose-res.png')
const hiw2 = require('../../assets/img/hiw/order-food.png')
const hiw3 = require('../../assets/img/hiw/pay-vcash.png')
const hiw4 = require('../../assets/img/hiw/get-delivered.png')

class Hiw extends Component {
    render(){
        return(
<div class="box">
    <div class="container">
    <h1 className="titles">How it works</h1>
         	<div class="row">
			    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
               
					<div class="box-part text-center">
						<CardImg top width="90%" src={hiw1} alt="Card image cap" />
						<div class="title">
							<h4>Choose a restaurant</h4>
						</div>
                        
						<div class="text">
							<span>Select a food item from a vendor.</span>
						</div>
                        
						{/* <a className="linkcolor" href="#">Learn More</a> */}
                        
					 </div>
				</div>	 
				
				 <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
               
					<div class="box-part text-center">
					    
					<CardImg top width="100%" src={hiw2} alt="Card image cap" />
                    
						<div class="title">
							<h4>Select a meal</h4>
						</div>
                        
						<div class="text">
							<span>Go through a list of available meals for the day.</span>
						</div>
                        
						{/* <a className="linkcolor" href="#">Learn More</a> */}
                        
					 </div>
				</div>	 

                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
               
               <div class="box-part text-center">
                   
			   <CardImg top width="100%" src={hiw3} alt="Card image cap" />
               
                   <div class="title">
                       <h4>Make your payment</h4>
                   </div>
                   
                   <div class="text">
                       <span>Pay for your meal via vodafone cash.</span>
                   </div>
                   
                   {/* <a className="linkcolor" href="#">Learn More</a> */}
                   
                </div>
           </div>
				
				 <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
               
					<div class="box-part text-center">
                        
					<CardImg top width="100%" src={hiw4} alt="Card image cap" />
                        
						<div class="title">
							<h4>Place your order</h4>
						</div>
                        
						<div class="text">
							<span>Your meal is ready for pick up or should be delivered to you.</span>
						</div>
                        
						{/* <a className="linkcolor" href="#">Learn More</a> */}
                        
					 </div>
				</div>	 
				
			
		</div>		
    </div>
</div>
        )
    }
}

export default Hiw;