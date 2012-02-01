package org.inftel.rest.server

class Profile {
	
	static belongsTo = User 
	
	byte[] photo
	
	String name
	String surname 
	String bio
	String homepage 
	String email
	String timezone 
	String country 

    static constraints = {
		photo(nullable: true)
		
		bio(nullable: true, maxSize: 1000) 
		homepage(url: true, nullable: true) 
		email(email: true, nullable: true) 		
		country(nullable: true) 
		timezone(nullable: true) 	
    }
}
