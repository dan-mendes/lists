Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function() {
	this.render('lists');
});

Router.route('/list/:urlId', {
	name: 'listView',
	controller: "ListViewController"
});

ListViewController = RouteController.extend({
	template: "listView",
	data: function () {
		var urlId = Router.current().params.urlId;
		return Lists.findOne({
			_id: urlId
		});
	}
});

Router.route('/create_list', function() {
	this.render('create_list');
});