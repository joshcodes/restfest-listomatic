var ResourceMapALPS = function (data, status, headers, config) {
	
	var jResourceMapData = $( data );

	this.todoListsQueryData = function()
	{
		var jTodoListQuery = $('.todoListQuery', jResourceMapData);
		if(jTodoListQuery.length !== 1)
		{
			return null;
		}
		todoListQueryEle = jTodoListQuery.get(0);
		if(todoListQueryEle.nodeName == "A")
		{
			
		}
	}

	return null;
}