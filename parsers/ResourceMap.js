var ResourceMap = function(url)
{
	this.resourceMaps = [];

	$http({method: 'GET', url: url}).
        success(function(data, status, headers, config) {

          // try to parse with ALPS
          var resourceMapALPS = ResourceMapALPS(data, status, headers, config);
          if(resourceMapALPS !== null)
          	this.resourceMaps.push(resourceMapALPS);

          // try to parse with microdata
          var resourceMapMicrodata = ResourceMapMicrodata(data, status, headers, config);
          if(resourceMapMicrodata !== null)
          	this.resourceMaps.push(resourceMapMicrodata);

          // try to parse as RDFa
          var resourceMapRDFa = ResourceMapRDFa(data, status, headers, config);
          if(resourceMapRDFa !== null)
          	this.resourceMaps.push(resourceMapRDFa);

          if(this.resourceMaps.length === 0)
          {
          	// TODO: the resource map is not a resource that can be parsed by this guys
          	// or ... tell user to upgrade their client
          	// or ... see error below
          }

        }).
        error(function(data, status, headers, config) {
          // TODO: try again
          // or ... go into "offline mode" 
        });

  this.categoriesQueryObj = null;
  this.categoriesQuery = function()
  {
    this.resourceMaps.map(function(resourceMap) {
      var categoriesQueryData = resourceMap.categoriesQueryData();
      if(categoriesQueryData != null)
      {
        this.categoriesQueryObj = CategoriesQuery(categoriesQueryData);
        return this.categoriesQueryObj;
      }
    });

    return null;
  }

	return this;
}
