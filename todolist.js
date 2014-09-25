var TodoList = function () {

    this.name = '';

    this.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];

    this.addTodo = function (name, isDone) {
    	// TODO: Do create on server
	    this.todos.push({text:name, done:isDone});
    }

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
