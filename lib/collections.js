Lists = new Mongo.Collection('lists');
Books = new Mongo.Collection('books');

var Schemas = {};

Schemas.List = new SimpleSchema({
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
		optional: true
	}
});

Schemas.Book = new SimpleSchema({
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
		label: "Write your comment about this book",
		optional: true,
		max: 500
	}
});

Lists.attachSchema(Schemas.List);
Books.attachSchema(Schemas.Book);
