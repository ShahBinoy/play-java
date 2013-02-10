package controllers;

import play.*;
import play.mvc.*;
import views.html.*;
import play.data.*;
import models.*;

public class Application extends Controller {
  
  	static Form<Post> postForm = Form.form(Post.class);

    public static Result index() {
        return ok(index.render("Your new application is ready."));
    }
  
    public static Result posts() {
	    return ok(
		    views.html.posts.render(Post.all(), postForm)
		  );
	}
	  
	public static Result newPost() {
		Form<Post> filledForm = postForm.bindFromRequest();
		if(filledForm.hasErrors()) {
			return badRequest(
			  views.html.posts.render(Post.all(), filledForm)
			);
		} else {
			Post.create(filledForm.get());
			return redirect(routes.Application.posts());  
		}
	}
	  
	public static Result deletePost(Long id) {
	      Post.delete(id);
  		  return redirect(routes.Application.posts());
	}
}
