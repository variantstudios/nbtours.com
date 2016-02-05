---
layout: page
title: "Book Tour"
intro: 'Use the form below to request a tour. We will contact you with further tour details once we recieve your request.'
permalink: /request/
page_header_image: /assets/images/header-front/home.jpg
---


<form action="#" method="post" class="request-form">
  <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
  <input type='hidden' name='redirect_to' value='https://www.variantstudios.com/contact/thanks/' />
  <!-- all your input fields here.... -->
  <h3>Basic Info</h3>
    <div class="webform-component">
        <label for="name">Your Name</label>
        <input type="text" name="name" id="name" required>
    </div>
    <div class="webform-component">
        <label for="email">Your Email</label>
        <input type="email" name="email" id="email" required="">
    </div>
    <div class="webform-component date">
        <label for="date">When are you interested in Touring</label>
        <input type="date" name="date" id="date" required=""><span class="desc">(MM/DD/YYYY) <a href="">Check Calendar for Availability</a></span>
    </div>
    <div class="webform-component">
        <label for="location">Where are you coming from:</label>
        <input type="text" name="location" id="location" required=""><span class="desc">ex: Denver, CO</span>
    </div>
     <div class="webform-component checkbox">
        <label for="airport">We will need to be picked up from the airport (Denver International Airport)</label>
        <input type="checkbox" name="airport" id="airport" required=""><span class="checkbox-label">Yes</span>        
    </div>
    <div class="webform-component">
        <label for="number">How many people in your Party:</label>
        <input type="number" name="number" id="number" required="">
    </div>
    <div class="webform-component">
        <label for="rooms">How many rooms at the Inn will your party need:</label>
        <input type="number" name="rooms" id="rooms" required="">
    </div>

    <h3>Customize Your Tour</h3>
    <div class="webform-component checkboxes">
        <label for="name">What are you interested in doing while in Twin Lakes?</label>
        <div class="checkbox-list-wrap">
          <div class="checkbox-list">
            <input type="checkbox" name="hiking" required=""><label>Hiking</label>
          </div>
          <div class="checkbox-list">
            <input type="checkbox" name="fishing" required=""><label>Fishing</label>
          </div>
          <div class="checkbox-list">
            <input type="checkbox" name="horses" required=""><label>Horse Back Riding</label>
          </div>
          <div class="checkbox-list">
            <input type="checkbox" name="horses" required=""><label>Photography</label>
          </div>
          <div class="checkbox-list">
            <input type="checkbox" name="horses" required=""><label>Seeing Wildlife</label>
          </div>
          <div class="checkbox-list">
            <input type="checkbox" name="beer" required=""><label>Seeing Local Towns & Breweries</label>
          </div>
        </div>
    </div>
    <div class="webform-component">
        <label for="Message">Anything not listed above that you'd like to do?</label>
        <textarea id="message" name="message" rows="3" cols="25"></textarea>
    </div>

    <div class="webform-component">
        <label for="special-req">Any Special Requirements we should know about?</label>
        <textarea id="special-req" name="special-req" rows="3" cols="25"></textarea>
    </div>

    <div class="webform-component">
        <label for="Message">Any Questions you have for us?</label>
        <textarea id="message" name="message" rows="6" cols="25"></textarea>
    </div>
    <input class="sendButton" type="submit" name="Submit" value="Send">
</form>
