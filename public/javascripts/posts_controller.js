function PostsIndexCtrl($scope, Post) {
  $scope.posts = Post.query();

  $scope.destroy = function() {
    dconfirm = confirm('Are you sure?');
    if(dconfirm){
      var original = this.post
      this.post.destroy(function() {
        $scope.posts = _.without($scope.posts, original);
      });
    }
  };
}

PostsIndexCtrl.$inject = ['$scope', 'Post'];

function PostsCreateCtrl($scope, $location, Post) {
  $scope.save = function() {
    Post.save($scope.post, function(post) {
      $location.path('/posts/' + post.id + '/edit');
    });
  }
}

PostsCreateCtrl.$inject = ['$scope', '$location', 'Post'];

function PostsShowCtrl($scope, $location, $routeParams, Post) {
  Post.get({id: $routeParams.id}, function(post) {
    self.original = post;
    $scope.post = new Post(self.original);
  });  
}

PostsShowCtrl.$inject = ['$scope', '$location', '$routeParams', 'Post'];

function PostsEditCtrl($scope, $location, $routeParams, Post) {
  var self = this;

  Post.get({id: $routeParams.id}, function(post) {
    self.original = post;
    $scope.post = new Post(self.original);
  });

  $scope.isClean = function() {
    return angular.equals(self.original, $scope.post);
  }

  $scope.destroy = function() {
    dconfirm = confirm('Are you sure?');
    if(dconfirm){
      $scope.post.destroy(function() {
      $location.path('/posts');
    });}
  };

  $scope.save = function() {
    Post.update($scope.post, function(post) {
      $location.path('/posts');
    });
  };
}

PostsEditCtrl.$inject = ['$scope', '$location', '$routeParams', 'Post'];
