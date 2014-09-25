// This is the view model for the list of categories
var CategoryList = function()
{
	this.categories = [];

	var categoryLists = [];

	this.load = function(data, status, headers, config)
	{
		if(categoryLists.length > 0)
			return;
		
		// try to parse with ALPS
		var categoryListALPS = CategoryListALPS(data, status, headers, config);
		if(categoryListALPS !== null)
          	categoryLists.push(categoryListALPS);

        if(categoryLists.length === 0)
          {
          	// TODO: the resource map is not a resource that can be parsed by this guys
          	// or ... tell user to upgrade their client
          	// or ... see error below
          }
	}

	this.addCategory = function(name)
	{

	}

	return this;
}