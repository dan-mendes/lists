Lists = new Mongo.Collection('lists');
Books = new Mongo.Collection('books');

var Schemas = {};

Schemas.List = new SimpleSchema ({
	title: {
		type: String,
		label: "Title",
		max: 50
	},
	listAuthor: {
		type: String,
		label: "List Author"
	},
	headline: {
		type: String,
		label: "Headline text",
		max: 280
	}
});

Schemas.Book = new SimpleSchema ({
	title: {
		type: String,
		label: "Title",
		max: 200
	},
	Author: {
		type: String,
		label: "List Author"
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