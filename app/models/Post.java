package models;

import java.util.*;

import play.db.ebean.*;
import play.data.validation.Constraints.*;

import javax.persistence.*;

@Entity
public class Post extends Model{
    
  @Id  
  public Long id;

  @Required
  public String title;
  public String author;
  public String content;
  
  public static Finder<Long,Post> find = new Finder(
    Long.class, Post.class
  );

  public static List<Post> all() {
    return find.all();
  }
   
  public static void create(Post post) {
  	post.save();
  }
  
  public static void delete(Long id) {
  	find.ref(id).delete();
  }
    
}