as a non registered or registered user
	- search for moments 
	- view detailed moments 
	- filter through moments 
	- redirected to the login page :: Login/Register 
	- BACKLOG: look at host pages 
	
as a registered user 
	- check profile 
	- update profile
	- view completed and upcoming moments 
	-  purchase an moment
	- BACKLOG: add to favorites
	- add review
as a host 
	- create a moment
	- check upcoming moment
	- view previous hosted moments :: payment history


Components:
<Home />
	<Nav /> 
		<Login />  :: bcrypt, redux | Link to ProfilePage
		<Search Bar />
		Links to HostPage and Trips
	<Moment />
	<CategoryList/>


<DetailMoment/>

<ProfilePage/> :: Conditionally rendered for editing 

<HostPage/>
	<Orders/>
	<Moment />
	<AddMoment/>
		<Wizards/>
<Trips/>
	<Orders/>
	<Reviews/>
	<AddReviews/>

<Payment/>
	<Stripe/>

<Cloudinary />
	

