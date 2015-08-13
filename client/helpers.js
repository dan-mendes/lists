Template.lists.helpers({
	lists: function () {
		return Lists.find();
	}
});

Template.listsItem.helpers({
	author: function() {
		return this.username;
	}
});