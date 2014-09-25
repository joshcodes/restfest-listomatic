var todoApp = angular.module('todoApp', ['$scope', function($scope)
{
  $scope.resourceMap = ResourceMap('../restfest-listomatic-schema/resourcemap.example.html');
}]);

var categoriesController = todoApp.controller('CategoriesController', ['$scope', function($scope)
{

  $scope.categoryList = $scope.resourceMap.categoryList();

  $scope.addCategory = function() {
    $scope.categoryList.addCategory($scope.categoryText,
      function()
      {
        $scope.categoryText = '';
      },
      function(data)
      {
        $scope.errorMessage = data;
      }
    );
  };

}]); // End categories controller


var todoController = todoApp.controller('TodosController', ['$scope', function($scope)
{
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.addTodo = function() {
    $scope.todoList.addTodo($scope.todoText, false);
    $scope.todoText = '';
  };
 
    $scope.archive = function() {
      $scope.todoList.archive();
    };

}]);

