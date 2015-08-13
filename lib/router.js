Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function() {
	this.render('readingLists');
});

Router.route('/list/:_id', function() {
	template: 'listView',
	data: function () {
		var urlId = Router.current().params._id;
		return Lists.findOne({
			_id: urlId
		});
	}
});

Router.route('/submit_list', function() {
	this.render('submit_list');
});