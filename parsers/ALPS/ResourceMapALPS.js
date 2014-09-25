var ResourceMapALPS = function (data, status, headers, config) {
	
	var jResourceMapData = $( data );

	followCategoryListLink = function(url, callback, error)
	{
		
	}

	this.categoryListData = function(success, error)
	{
		var jCategoryList = $('.categoryList', jResourceMapData);
		if(jCategoryList.length !== 1)
		{
			return null;
		}

		categoryListEle = jTodoListQuery.get(0);
		if(categoryListEle.nodeName == "A")
		{
			var url = categoryListEle.attr('href');
			$http({method: 'GET', url: url}).
				success(success).
				error(error);
		}
	}

	return null;
}