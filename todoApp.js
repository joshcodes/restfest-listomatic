var todoApp = angular.module('todoApp', []);
todoApp.run(function($rootScope, $http) {
  $rootScope.resourceMap = ResourceMap($http, '../restfest-listomatic-schema/resourcemap.example.html');
});

var categoriesController = todoApp.controller('CategoriesController', function($scope, $rootScope)
{
  $scope.categories = [
  {
      name: 'Test 1',
      id: 'test1',
      synched: true,
      errorMessage: null
    },
    {
      name: 'Test 2',
      id: 'test2',
      synched: false,
      errorMessage: 'Server not complete'
    },
    {
      name: 'Test 3',
      id: '',
      synched: false,
      errorMessage: null
    }];

  $rootScope.resourceMap.initializeCategories($scope.categories);
  
  $scope.selectCategory = function()
  {
    $scope.resourceMap.selectedCategory($scope.selectedCategory, $scope.todos);
    // TODO: Filter category list
  }

  $scope.addCategory = function()
  {
    var newCategory = {
      name: $scope.categoryText,
      id: '',
      synched: false,
      errorMessage: null
    };

    $scope.resourceMap.addCategory($scope.categoryText)
      .success(function(category)
      {
        $scope.categoryText = '';
        newCategory.synched = true;
        newCategory.id = category.id;
      })
      .error(function(data)
      {
        newCategory.errorMessage = data;
      });
    
    $scope.categories.push(newCategory);

  };

}); // End categories controller


var todoController = todoApp.controller('TodosController', ['$scope', function($scope)
{
  $scope.todos = [
    {
      name: 'Test todo',
      id: '',
      categoryId: 'test1',
      synched: false,
      errorMessage: null,
      complete: false
    },
    {
      name: 'Test cat 2',
      id: '',
      categoryId: 'test2',
      synched: true,
      errorMessage: null,
      complete: true
    }
  ];


  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.addTodo = function() {
    var newTodo = {
      name: $scope.todoText,
      id: '',
      categoryId: $rootScope.selectedCategory.id,
      synched: false,
      errorMessage: null,
      complete: false
    };

    $scope.resourceMap.addTodo(newTodo.id, newTodo.name, newTodo.complete)
      .success(function(todo)
      {
        $scope.todoText = '';
        newTodo.synched = true;
        newTodo.id = todo.id;
      })
      .error(function(data)
      {
        newTodo.errorMessage = data;
      });
    
    $scope.todos.push(newTodo);
  };

}]);

