Template.lists.helpers({
	lists: function () {
		return Lists.find();
	}
});

Template.listsItem.helpers({
	author: function() {
		return Users.findOne();
	}
});

Template.listView.helpers({
	booksInside: function() {
		return this.books;
	}
});

AutoForm.hooks({
  	insertBookForm: {
    	onSuccess: function(formType, result) {
    		//console.log("bookInserted!");
    		var bookId = this.docId;
    		//console.log("bookId=" + bookId);
    		var listId = Session.get("currentList");
    		//console.log("listId=" + listId);
    		Lists.update(
    			listId, 
    			{ $push: { books: bookId } }
			);
    		return;
    	}
  	}
});