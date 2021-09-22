## Team 6 Project Ideas:

# 1. Development of an online platform for Seed Funding/Venture Funding/Angel Funding for Startups

## Introduction to the problem statement
   
   Funding is crucial for all early stage and crucial startups. Investors have their own platforms for VC/Angel/Crowdfunding. There is no aggregated platform as of now.            Startups can get access to investors. 
   
## Abstract (rough draft)
   
   With change comes challenges. We want to leverage the enormous capabilities of technology to make VC/Angel/Crowdfunding accessible and ease the process of Funding for            everyone. We want to create a one-stop solution where various organizations and the potential investors can interact with each other throughout the entire process right          from pitching in the ideas to finalizing the deal. 
   
   We are planning on having a number of features for this platform which include:
   
   * Ability for the organizations to reach out to the investors and vice versa via a ‘Search’ and a ‘Smart Search’ functionality. What we mean by ‘Smart Search’ is that              either of the users will answer a responsive questionnaire about their preferences and what they’re looking for, including the rough estimates for the figures and                things like that, and they will be smartly matched with a list of companies/investors.
   * Ability to fix meetings, upload documentation, review paperwork, etc.
   * A notification system wherein the other party will be notified of an action via email and text message.
   * We can also plan to have an e-learning module wherein organizations can subscribe to various courses/ tips and tricks etc for making a pitch, ROI documents, etc. The e-          learning modules can be in the form of PDFs, documents or video tutorials.
   
## Approach
   
   We will be making use of MySql for all the database operations (maintaining the tables, writing of queries, views, stored procedures, etc.

   For the backend, we will be making use of Express and Node for developing REST APIs, and we can also make use of TypeScript for certain operations.

   For the frontend, we will be using a JavaScript library called React, which can seamlessly handle states and other basic pages. We can couple it with either Bootstrap or        Material UI for a responsive and an interactive design.

   This MVC (Model View Controller) architecture will help us in modularizing our code and also separate out all our services, so that debugging and developing will be much        easier, and the code will be much more cleaner as well, hence aiding in maintaining it for a long term.

   We will be making use of various other external APIs as well for SMS, email (Mail gun), payment gateway (Razorpay).

   AWS S3 Bucket for storing all the media such as video tutorials, PPTs, documents, etc.

## Persona
   
   This application will primarily have 2 personas:
   1) Organizations: Major responsibilities include reaching out to investors, uploading documents, pitches, subscribing to tutorials, etc
   2) Investors: Major responsibilities include connecting with organizations, reviewing documents, uploading paperwork, etc
           
## Dataset links
  
   Not Applicable.

  (More features and use cases can be added to this web application based on some more market research. This problem statement was originally inspired from Smart India             Hackathon (https://www.sih.gov.in/sih2020PS)


# 2. Vaccine Tracker

## Introduction to the Problem Statement
   
   Vaccines are in high demand across the globe with only 32.3% of the world vaccinated. That still leaves 5.4 billion people to be vaccinated. With such high demand for            vaccines it is of utmost importance that vaccine utilization is efficient. Vaccine wastage should be minimized as much as possible and appropriate care of vaccines should be    ensured at each stage.
   
## Abstract (rough draft)

   The need for minimal wastage of vaccines and optimal use of each vaccine produced can be solved with a sophisticated tracking system which tracks the vaccine from the point a    shipment arrives at a country/state to the point a person is injected with the vaccine. This end-to-end tracking allows the government and manufactures to gain insights that    help minimize vaccine wastage. The insights could include: Which county/pharmacy has a shortage/surplus of vaccines, which county has least/high demand, opportunity to drill    down on reasons for wastage (ex: long route, climate of area etc).
   
   It is also important to track certain attributes of each phase of the vaccine, such as temperature to ensure the vaccine is in the correct condition. Often in the case of        supply chain management each entity exists on different systems. For example, the entity that receives the shipment at the shipping dock and the pharmacist who injects the      vaccine at a CVS exist on two different systems. Hence a decentralized application and trust at each stage is necessary. 
   
## Approach

   The two requirements mentioned earlier, i.e trust and decentralized systems in the supply chain can be solved through the use of blockchain for supply chain management. At      each point of the supply chain the corresponding entity would upload values such as shipping number, departure location, destination location, weight, and temperature onto a    common website. Blockchain would ensure each entity in the supply chain has an identical copy of the information ensuring trust.
   
## Persona 

   For the sake of the project, personas would be limited to three, namely:
   
   1) Shipment receiver: This person would receive the shipment of vaccines which would arrive by ship or aeroplane or freight carrier.
   2) Delivery agent: This person would transport the vaccine via road/air/frieght to the intended pharmacy/retail store.
   3) Pharmacist: This person would inject the vaccine into an unvaccinated person. Thereby ending the chain.
     
## Dataset links
  
   Not Applicable.
   
   
# 3. Pre-owned car trading platform

## Introduction to the problem statement
   
   Building a used car trading platform to simplify the trading process. By leveraging the historical data, we can build a regression model for car price prediction with which      users can get a quote in real-time.
   
## Abstract (rough draft)

   The whole user journey is elaborated on as follows:
   
   * For buyers: They have to register an account, browse or search the cars on the website, our website will support filtering functions so users can enter the price range,          mileage range, etc. to find their favorite cars. Users can contact the owner directly, or if they still need to look for more options, they can add the car to the                collections. Once doing that, if the car has a price change, or is not available anymore, the user will receive a notification.
  
   * For sellers: They also need to register an account, and upload some pictures and details of the car to our website. They can also get a real-time quota with one click, this      will help them to give a reasonable price for their car.

## Approach

   Registration System: Users can register an account so the user can add some car to the collections, or post their own car and check the status anytime.
   
   Notification System: We can leverage the email push API (e.g. Gmail API) to notify users when
   
   * cars they are interested in have price changes or are sold out. 
   * other userss expressed interest in the car they posted.
                         
   Blob Storage: We need to store many car images, so we can integrate the backend with AWS S3 for all blobs storage.
   
   Machine Learning - Price prediction: To support real-time price quotes, we need to train a model and serve it on the cloud. We can do some experiments to select the useful      features in the Kaggle data and train a TensorFlow model. And we can deploy the model on AWS SageMaker. 
   
   Database: For all other metadata, we can consider using MySQL or MongoDB. AWS provides a service for MySQL. MongoDB Atlas can also be deployed on AWS.
   
   Tech Stack: For the backend, we can go with either Python (Django or Flask) or Node.JS (Express).
   
## Persona
  
   1) Car Buyers: People don’t have to visit the dealer to find a car, especially during a pandemic. Buying a car online is a really cool idea.
      
   2) Students: I found many students don’t have a good estimation of the car prices, with this website, the machine learning model will predict a reasonable price range for           a car. This will be fair to both buyers and sellers.
      
## Dataset links

   Kaggle dataset: https://www.kaggle.com/nehalbirla/vehicle-dataset-from-cardekho
   
