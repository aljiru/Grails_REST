package org.inftel.rest.server



import grails.test.mixin.*

import org.inftel.rest.server.Post;
import org.junit.*

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(Post)
class PostTests {

    void testConstraints() {
//       def post = new Post(content: "One post created for the sake to test", user: new User(userId: "glen", password: "passwd"))
//	   mockForConstraintsTests(Post, [post])
//	   
//	   // La validacion debe fallar porque el Post no tiene contenido
//	   def testPost = new Post(content: "")
//	   assert !testPost.validate()
//	   assert "blank", testPost.errors["content"]
//	   
//	   // En esta ocasion la validacion de Post tiene que pasar
//	   testPost = new Post(content: "Post with valid content", user: new User(userId: "glen", password: "passwd"))
//	   assert testPost.validate();
    }
}
