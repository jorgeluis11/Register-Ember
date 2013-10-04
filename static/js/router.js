App.Router.map(function()
{
	this.resource("index", {path:"/"} ,function()
	{
		this.route("login", {path:"/"} )
		this.route("signup", {path:"/signup"});
		//this.route("signup");
	});
	
});