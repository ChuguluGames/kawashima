var Router = Backbone.Router.extend({
  routes: {
    ":page":  "dispatch"
  },

	dispatch: function() {
		var r = this;
		
		// no params, let's go home!
		if(_.isUndefined(arguments) || _.isEmpty(arguments[0])) {
		  r.navigate("home", true);
		  return false;
		}

		loader.load("src!" + arguments[0] + "/loader.js");
	}

});