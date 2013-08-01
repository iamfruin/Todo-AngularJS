function TodoController($scope, $http){
	$http.get('http://localhost:8080/items').success(function(data){
		$scope.todos = data;
	});

	$scope.addTodo = function(){
		//$scope.todos.push({description:$scope.todoText});
		$http.post('http://localhost:8080/items',{description:$scope.todoText}).success(function(data){
			$scope.todos = data;
		});

		$scope.todoText = '';
	};
}