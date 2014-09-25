var TodoLists = function(data)
{
	var jdata = $(data);
	this.queryForm = $('form.todoListQuery', jdata);
	
    this.allArray = null;
    this.all = function(callback)
    {
    	if(allArray !== null)
    	{
    		callback(allArray);
    		return;
    	}

    	this.queryForm.ajaxForm({
    		url : this.queryForm.attr('action'),
    		dataType : 'html',
    		success : function (response)
    		{
    			this.allArray = parseResponse(response);
    			callback(this.allArray);
    		}
    	});
    }
    
	return this;
}
