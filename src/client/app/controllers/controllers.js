app.controller('TodoController', function ($scope, TodoItemService){

	init();

	function init(){
		$scope.todos = TodoItemService.getTodoItems();
	}	

	$scope.addTodo = function(){		
		$scope.todos = TodoItemService.addTodoItem({description:$scope.todoText, done:false});
		$scope.todoText = '';
	};
});