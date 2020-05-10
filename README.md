This is a POC of using Contenful and Firebase to create contexted, segmented content for users. 
What this means in simple terms is that we set up a stack of content for a user, and then iterate thru that based on certain actions that we listen to. 
The logic for the content iteration is a cloud function on Firebase, and is de-coupled from the React presentational layer. 

On sign in, users enter some information, and we chose a journey for them. As they interact with this journey, Firebase stores information and decides which content piece to display next. 
Contentful serves these pieces. 
Extra work, an additional Journey layer in Contentful so Journeys can be changed. 

How do we do analytics on this. How do we update Email and other serveices. 

