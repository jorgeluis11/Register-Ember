App.User = DS.Model.extend({
	fullname: DS.attr("string"),
	email: DS.attr("string"),
	password: DS.attr("string")
});

App.User.FIXTURES = [{
	id:1,
	fullname: "Jorge",
	email: "email",
	password: "aaa"
}]