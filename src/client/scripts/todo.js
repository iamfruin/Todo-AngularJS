function TodoController($scope){
	$scope.todos = [
		{text:'learn angular'},
		{text:'build an angular	app'}
	];

	$scope.addTodo = function(){
		$scope.todos.push({text:$scope.todoText});
		$scope.todoText = '';
	};
}