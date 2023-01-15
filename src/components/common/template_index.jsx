import React from 'react'
import { Navbar } from 'react-bootstrap'

export const Template_index = () => {
  return (

    <div>
  <div class="header-areas">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="user-menu">
                    <ul>
                        <li>Contact Number : </li>  <i className="fa fa-phone"></i> <a href="tel:+88 01234-567890">+88 01234-567890</a>
                        
                    </ul>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="user-menu">
                    <ul class="">
                        
                        <li class="dropdown dropdown-small">
                          <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href="#"><span class="key">language :</span><span class="value">English </span><b class="caret"></b></a>
                          <ul class="dropdown-menu">
                            <li><a href="#">English</a></li>
                            <li><a href="#">French</a></li>
                            <li><a href="#">German</a></li>
                          </ul>
                        </li>

                        <li class="dropdown dropdown-small">
                            <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href="#"><span class="key">theme :</span><span class="value">Normal </span><b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Dark</a></li>
                            </ul>
                        </li>

                        <li class="dropdown dropdown-small"><a href="#"><i className="fa fa-user"></i> Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

  <header class="header-area overlay">
    <nav class="navbar navbar-expand-md navbar-dark">
		<div class="container">
			<a href="#" class="navbar-brand">N&N</a>
			
			<button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
				<span class="menu-icon-bar"></span>
				<span class="menu-icon-bar"></span>
				<span class="menu-icon-bar"></span>
			</button>
			
			<div id="main-nav" class="collapse navbar-collapse">
				<ul class="navbar-nav ml-auto">
					<li><a href="#" class="nav-item nav-link active">Home</a></li>
					<li><a href="#" class="nav-item nav-link">About Us</a></li>
					<li class="dropdown">
						<a href="#" class="nav-item nav-link" data-toggle="dropdown">Services</a>
						<div class="dropdown-menu">
							<a href="#" class="dropdown-item">Dropdown Item 1</a>
							<a href="#" class="dropdown-item">Dropdown Item 2</a>
							<a href="#" class="dropdown-item">Dropdown Item 3</a>
						</div>
					</li>
					<li class="dropdown">
						<a href="#" class="nav-item nav-link" data-toggle="dropdown">Portfolio</a>
						<div class="dropdown-menu">
							<a href="#" class="dropdown-item">Dropdown Item 1</a>
							<a href="#" class="dropdown-item">Dropdown Item 2</a>
							<a href="#" class="dropdown-item">Dropdown Item 3</a>
							<a href="#" class="dropdown-item">Dropdown Item 4</a>
							<a href="#" class="dropdown-item">Dropdown Item 5</a>
						</div>
					</li>
					<li><a href="#" class="nav-item nav-link">Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>
	
	<div class="banner">
		<div class="container">
			<h1>React Template</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie.</p>
			<a href="#content" class="button button-primary">Learn More</a>
		</div>
	</div>
</header>

<main>
	<section id="content" class="content">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla. </p>
				</div>
				<div class="col-md-4">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla. </p>
				</div>
				<div class="col-md-4">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec elit ex. Etiam elementum lectus et tempor molestie. Pellentesque vestibulum dui sit amet dui volutpat sollicitudin. Etiam non erat finibus, iaculis nunc vel, convallis eros. Etiam efficitur tempor dui, vitae fringilla ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper ex et viverra vulputate. Nam lectus ligula, pretium nec risus nec, ultricies fringilla mauris. Proin quis venenatis neque, iaculis porta nulla. </p>
				</div>
			</div>
		</div>
	</section>
</main>
<footer>
  <div class="footer-top-area">
  <div class="zigzag-bottom"></div>
  <div class="container">
      <div class="row">
          <div class="col-md-3 col-sm-6">
              <div class="footer-about-us">
                  <h2>N<span>&</span>N</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?</p>
                  <div class="footer-social">
                      <a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
                      <a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                      <a href="#" target="_blank"><i class="fa fa-youtube"></i></a>
                      <a href="#" target="_blank"><i class="fa fa-linkedin"></i></a>
                  </div>
              </div>
          </div>
          
          <div class="col-md-3 col-sm-6">
              <div class="footer-menu">
                  <h2 class="footer-wid-title">User Navigation </h2>
                  <ul>
                      <li><a href="#">My account</a></li>
                      <li><a href="#">Order history</a></li>
                      <li><a href="#">Wishlist</a></li>
                      <li><a href="#">Vendor contact</a></li>
                      <li><a href="#">Front page</a></li>
                  </ul>                        
              </div>
          </div>
          
          <div class="col-md-3 col-sm-6">
              <div class="footer-menu">
                  <h2 class="footer-wid-title">Categories</h2>
                  <ul>
                      <li><a href="#">Mobile Phone</a></li>
                      <li><a href="#">Home accesseries</a></li>
                      <li><a href="#">LED TV</a></li>
                      <li><a href="#">Computer</a></li>
                      <li><a href="#">Gadets</a></li>
                  </ul>                        
              </div>
          </div>
          
          <div class="col-md-3 col-sm-6">
              <div class="footer-newsletter">
                  <h2 class="footer-wid-title">Newsletter</h2>
                  <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                  <div class="newsletter-form">
                      
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

<div class="footer-bottom-area">
  <div class="container">
      <div class="row">
          <div class="col-md-8">
              <div class="copyright">
                  <p>&copy; 2023 N&N. All Rights Reserved. <a href="#" target="_blank"></a></p>
              </div>
          </div>
          
          <div class="col-md-4">
              <div class="footer-card-icon">
                  <i class="fa fa-cc-discover"></i>
                  <i class="fa fa-cc-mastercard"></i>
                  <i class="fa fa-cc-paypal"></i>
                  <i class="fa fa-cc-visa"></i>
              </div>
          </div>
      </div>
  </div>
</div>
</footer>
</div>

        // <div>
        //     <header>
        //         <div class="header-area">
        //             <div class="container">
        //                 <div class="row">
        //                     <div class="col-md-8">
        //                         <div class="user-menu">
        //                             <ul>
        //                                 <li>Contact Number : </li>  <i className="fa fa-phone"></i> <a href="tel:+88 01234-567890">+88 01234-567890</a>
                                        
        //                             </ul>
        //                         </div>
        //                     </div>
                            
        //                     <div class="col-md-4">
        //                         <div class="header-right">
        //                             <ul class="list-unstyled list-inline">
        //                                 <li class="dropdown dropdown-small">
        //                                     <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href="#"><span class="key">language :</span><span class="value">English </span><b class="caret"></b></a>
        //                                     <ul className="dropdown-menu">
        //                                         <li><a href="#">English</a></li>
        //                                         <li><a href="#">French</a></li>
        //                                         <li><a href="#">German</a></li>
        //                                     </ul>
        //                                 </li>

        //                                 <li class="dropdown dropdown-small">
        //                                     <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href="#"><span class="key">theme :</span><span class="value">Normal </span><b class="caret"></b></a>
        //                                     <ul class="dropdown-menu">
        //                                         <li><a href="#">Dark</a></li>
        //                                     </ul>
        //                                 </li>

        //                                 <li class="dropdown dropdown-small"><a href="#"><i className="fa fa-user"></i> Login</a></li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </header> 
        //     <Navbar>
        //         <div class="mainmenu-area">
        //             <div class="container">
        //                 <div class="row">
        //                     <div class="navbar-header">
        //                         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        //                             <span class="sr-only">Toggle navigation</span>
        //                             <span class="icon-bar"></span>
        //                             <span class="icon-bar"></span>
        //                             <span class="icon-bar"></span>
        //                         </button>
        //                     </div> 
        //                     <div class="navbar-collapse collapse">
        //                         <ul class="nav navbar-nav list-inline2">
        //                             <li class="active"><a href="index.html">Home</a></li>
        //                             <li><a href="shop.html">Shop page</a></li>
        //                             <li><a href="single-product.html">Single product</a></li>
        //                             <li><a href="cart.html">Cart</a></li>
        //                             <li><a href="checkout.html">Checkout</a></li>
        //                             <li><a href="#">Category</a></li>
        //                             <li><a href="#">Others</a></li>
        //                             <li><a href="#">Contact</a></li>
        //                         </ul>
        //                     </div>  
        //                 </div>
        //             </div>
        //         </div> 
        //     </Navbar>
        //     <footer>
        //         <div class="footer-top-area">
        //         <div class="zigzag-bottom"></div>
        //         <div class="container">
        //             <div class="row">
        //                 <div class="col-md-3 col-sm-6">
        //                     <div class="footer-about-us">
        //                         <h2>u<span>Stora</span></h2>
        //                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?</p>
        //                         <div class="footer-social">
        //                             <a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
        //                             <a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
        //                             <a href="#" target="_blank"><i class="fa fa-youtube"></i></a>
        //                             <a href="#" target="_blank"><i class="fa fa-linkedin"></i></a>
        //                         </div>
        //                     </div>
        //                 </div>
                        
        //                 <div class="col-md-3 col-sm-6">
        //                     <div class="footer-menu">
        //                         <h2 class="footer-wid-title">User Navigation </h2>
        //                         <ul>
        //                             <li><a href="#">My account</a></li>
        //                             <li><a href="#">Order history</a></li>
        //                             <li><a href="#">Wishlist</a></li>
        //                             <li><a href="#">Vendor contact</a></li>
        //                             <li><a href="#">Front page</a></li>
        //                         </ul>                        
        //                     </div>
        //                 </div>
                        
        //                 <div class="col-md-3 col-sm-6">
        //                     <div class="footer-menu">
        //                         <h2 class="footer-wid-title">Categories</h2>
        //                         <ul>
        //                             <li><a href="#">Mobile Phone</a></li>
        //                             <li><a href="#">Home accesseries</a></li>
        //                             <li><a href="#">LED TV</a></li>
        //                             <li><a href="#">Computer</a></li>
        //                             <li><a href="#">Gadets</a></li>
        //                         </ul>                        
        //                     </div>
        //                 </div>
                        
        //                 <div class="col-md-3 col-sm-6">
        //                     <div class="footer-newsletter">
        //                         <h2 class="footer-wid-title">Newsletter</h2>
        //                         <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
        //                         <div class="newsletter-form">
                                    
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
            
        //     <div class="footer-bottom-area">
        //         <div class="container">
        //             <div class="row">
        //                 <div class="col-md-8">
        //                     <div class="copyright">
        //                         <p>&copy; 2015 uCommerce. All Rights Reserved. <a href="http://www.freshdesignweb.com" target="_blank">freshDesignweb.com</a></p>
        //                     </div>
        //                 </div>
                        
        //                 <div class="col-md-4">
        //                     <div class="footer-card-icon">
        //                         <i class="fa fa-cc-discover"></i>
        //                         <i class="fa fa-cc-mastercard"></i>
        //                         <i class="fa fa-cc-paypal"></i>
        //                         <i class="fa fa-cc-visa"></i>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     </footer>
        // </div>
  )
}

export default Template_index