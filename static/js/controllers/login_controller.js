App.IndexSignupController = Ember.ArrayController.extend({
	completed: false,
	fullNameError:undefined,
	emailError:undefined,
	passwordError:undefined,
	confirmError:undefined,
	termError: undefined,
	errors:[],
	isProcessing:false,
	actions:
	{
		//Signup Method
		signup:function()
		{
			this.set("errors",[]);
			//Variable declarations
			var _errors = [];
			var fullname = this.get("fullname");
			var email = this.get("email");
			var password = this.get("password");
			var passwordConfirmation = this.get("passwordConfirm");
			var term = this.get("term");
			//Validation
			if (!fullname) 
			{
				_errors.push("FullName is Empty")
				this.set("fullNameError", true);
			}
			else
			{
				console.log("sdfsd")
				this.set("fullNameError", false);
			}
			if (!email)
			{
				this.set("emailError", true);
				_errors.push("Email is Empty")
			}
			else
			{
				var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
				if (!re.test(email))
					{
						_errors.push("Email is not valid")
						this.set("emailError", true);
					}
					else
					this.set("emailError", false);
			}


			if (!password) 
			{
				this.set("passwordError", true);
				_errors.push("Password is Empty")
			}
			else
			{
				if (password.length < 6) 
				{
					this.set("passwordError", true);
					this.set("confirmError", true);
					_errors.push("Password minimum is 6 characters");
				}
				else
					this.set("passwordError", false);
			}

			if (!passwordConfirmation) 
			{
				this.set("confirmError", true);
				_errors.push("Password Confirmation is empty")
			}
			else
			{
				if (password !== passwordConfirmation) 
				{
					_errors.push("Password and Confirmation Password don't match");
					this.set("confirmError", true);
				}
				else
					this.set("confirmError", false);
			}

			if (!term) 
				{
					_errors.push("Term of Service not accepted");
					this.set("termError", true);
				}
				else
					this.set("termError", false);

			this.set("errors", _errors);
			if (_errors.length !== 0) return;
			this.store.createRecord('user',{
				fullname: fullname,
				email: email,
				password: password,
			}).save();

			this.set("isProcessing", false);
			this.set("completed", true);
			this.transitionToRoute("/congratulation");
		},
		redirect:function()
		{
			this.set("fullname","");
			 this.set("email","");
			 this.set("password","");
			 this.set("passwordConfirm","");
			this.set("term",false);			this.set("completed", false);
			this.transitionToRoute("/")
		}
	},
});

App.IndexLoginController = Ember.ArrayController.extend({
	fullNameError:false,
	emailError:false,
	passwordError:false,
	confirmError:false,
	termError: false,
	isProcessing:false,
	actions:
	{
		//login Method
		login:function()
		{
			var fullname = this.get("fullname");
			var password = this.get("password");
			var model = this.store.findQuery("user",{fullname:"Jorge"});
			console.log(this);
		}
	},
});

