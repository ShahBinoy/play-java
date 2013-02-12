angular.module('posts', ['ngResource']).
  factory('Post', ['$resource', function($resource) {
  var Post = $resource('/posts/:id', {id: '@id'},
                       {
                         update: { method: 'PUT' },
                         destroy: { method: 'DELETE'}
                       }
                      );

  Post.prototype.destroy = function(cb) {
    return Post.remove({id: this.id}, cb);
  };

  return Post;
}]);
/*
angular.module('posts', ['ngResource']).
  factory('Post', function($resource) {
  var Post = $resource('/posts/:id',
                       {}, {
                         update: { method: 'PUT' },
                         destroy: { method: 'DELETE'}
                       }
                      );

                      Post.prototype.update = function(cb) {
                        return Post.update({id: this._id},
                                           angular.extend({},
                                                          this,
                                                          {id:undefined}), cb);
                      };

                      Post.prototype.destroy = function(cb) {
                        return Post.remove({id: this._id}, cb);
                      };

                      return Post;
});
*/
