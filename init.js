requirejs.config(
{
   	paths: 
	{
       	"knockout": "/knockout/knockout-3.5.1",
       	"text": "/requirejs/text",
        "jqx-all": "/jqwidgets/jqx-all",
       	"jquery": "/jquery/jquery-3.6.0.min",
		"app": "./app"
   	}
});
require(["jquery", "knockout", "app", "jqx-all","text"], function($,ko,App) 
{
    $(function () 
	{
        ko.applyBindings(new App());
    });
});
