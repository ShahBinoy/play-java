package controllers;

import play.*;
import play.mvc.*;
import views.html.*;
import play.data.*;
import models.*; 
import org.codehaus.jackson.node.ObjectNode;
import play.libs.Json;
import java.util.*;
import play.Logger;

public class Application extends Controller {
  
  	static Form<Post> postForm = Form.form(Post.class);

    public static Result index() {
        return ok(index.render("Your new application is ready."));
    }
  
    public static Result posts() {
    	List posts = Post.all();
    	//Logger.info(Json.toJson(posts).toString());
 
    	ObjectNode result = Json.newObject();
	    return ok(Json.toJson(posts));
	}
	  
	public static Result newPost() {
		Form<Post> filledForm = postForm.bindFromRequest();
		if(filledForm.hasErrors()) {
			return badRequest(
			  views.html.posts.render(Post.all(), filledForm)
			);
		} else {
			Post.create(filledForm.get());
			return ok();  
		}
	}
	
	public static Result updatePost(Long id) { 
		Form<Post> filledForm = postForm.bindFromRequest();
		
		if(filledForm.hasErrors()) {
			return badRequest(
			  views.html.posts.render(Post.all(), filledForm)
			);
		} else {
			Post.update(filledForm.get());
			return ok();  
		}
	}

	public static Result post(Long id) { 
  		  return ok(Json.toJson(Post.find(id)));
	}

	public static Result deletePost(Long id) {
	      Post.delete(id);
  		  return ok();
	}
}
