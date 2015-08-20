Lists = new Mongo.Collection('lists');
Lists.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 50
	},
	listAuthorId: {
		type: String,
		autoValue: function() {
			return this.userId;
		}
	},
	listAuthor: {
		type: String,
		autoValue: function() {
			return Meteor.user().username;
		}
	},
	headline: {
		type: String,
		label: "Headline text",
		max: 280
	},
	books: {
		type: [String],
		max: 50, // max string length for id
		maxCount: 100, // max number of items
		optional: true,
		defaultValue: function () {
			return [];
		}
	}
}));

Books = new Mongo.Collection('books');
Books.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 200
	},
	Author: {
		type: String,
		label: "Author"
	},
	Genre: {
		type: String,
		label: "Genre",
		max: 50
	},
	Comment: {
		type: String,
		label: "Comment",
		optional: true,
		max: 500
	}
}));


