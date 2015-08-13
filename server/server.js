Meteor.startup(function () {
	if (Lists.find().count() === 0) {
		[{
			title: "first awesome list",
			author: "author x",
			headline: "this is the first list in this awesome website"
		}, 
		{
			title: "second awesome list",
			author: "author y",
			headline: "this is the second list in this awesome website"
		}].forEach(function(list) {Lists.insert(list);});
	}
});