const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://user12345:user12345@mycourseapp.8snlve6.mongodb.net/LibraryappDB?retryWrites=true&w=majority')
const BooksSchema=mongoose.Schema({
    title:String,
    author:String,
    status:String,
    duedate:String
    
})
var BooksData=mongoose.model('booklist',BooksSchema);
module.exports=BooksData;