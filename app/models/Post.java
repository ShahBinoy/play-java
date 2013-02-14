package models;

import java.util.*;
import play.db.ebean.*;
import play.data.validation.Constraints.*;
import javax.persistence.*;
import play.Logger;

@Entity
public class Post extends Model{
    
  @Id  
  public Long id;

  @Required
  public String title;
  public String author;
  public Long created_at;
  public String content;
  
  public Post(){
    this.created_at = new Date().getTime();
  }

  private static Finder<Long,Post> find = new Finder(
    Long.class, Post.class
  );

  public static List<Post> all() {
    return find.all();
  }
   
  public static Post find(Long id) {
    return find.byId(id);
  }
   
  public static void create(Post post) {
  	post.save();
  }
  
  public static void update(Post post) {    
    post.update();
  }

  public static void delete(Long id) {
  	find.ref(id).delete();
  }
    
}