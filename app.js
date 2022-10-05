const express =require('express');
const cors=require('cors');
const BookData=require('./models/bookData');
const app=new express();
const path=require('path');
app.use(cors());
app.use(express.json())
app.use(express.static(`./dist/frontend`));
app.get(`/*`,function(req,res){
    res.sendFile(path.join(__dirname + '/dist//frontend/index.html'));
});

app.post('/api/addbook',function(req,res){
    var item={
        bookTitle:req.body.title,
        bookAuthor:req.body.author,
        bookStatus:req.body.status,
        bookDuedate:req.body.duedate
        
    }
    var data=BookData(item);
    data.save();
    console.log(data);
    BookData.find().then(function(data){
        res.send(data);
        console.log(data);
    })

})

app.get('/api/booklist',function(req,res){
    
    CourseData.find()
                .then(function(courses){
                    res.send(courses);
                });
});
app.listen(process.env.PORT || 3000, () => {
    console.log("Server Ready on 3000"); 
  });
