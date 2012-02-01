package org.inftel.rest.server



import grails.test.mixin.*

import org.inftel.rest.server.User;
import org.junit.*

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(User)
class UserTests {

	void testConstraints() {
		def will = new User(userId: "william")
		mockForConstraintsTests(User, [will])

		// La validacion debe fallar porque no se ha introducido ni usuario ni pass
		def testUser = new User() 
		assert !testUser.validate() 
		assertEquals "nullable", testUser.errors["userId"] 
		assertEquals "nullable", testUser.errors["password"]
		
		// La validacion debe fallar porque el usuario y la pass son iguales
		testUser = new User(userId: "william", password: "william") 
		assert !testUser.validate()
		assertEquals "unique", testUser.errors["userId"] 
		assertEquals "validator", testUser.errors["password"]
		
		// En esta ocasion la validacion de usuario tiene que pasar
		testUser = new User(userId: "glen", password: "passwd") 
		assert testUser.validate()
	}
}
