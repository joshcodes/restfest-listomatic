var TodoCrawler = function (resourceMapUrl) {

    this.name = '';


    this.resourceMap = ResourceMap(resourceMapUrl);

    this.remaining = function() {
      var count = 0;
      angular.forEach(todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    this.archive = function() {
    	var oldTodos = todos;
    	this.todos = [];
      	angular.forEach(oldTodos, function(todo) {
        	if (!todo.done) this.todos.push(todo);
        });
    }

    return this;
};