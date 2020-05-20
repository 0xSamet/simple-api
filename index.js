const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./models/Post');
const Category = require('./models/Category');

const app = express();

app.use(cors());

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true}, (err) => {
  if(err)
    console.log(err);
});

app.get('/', (req,res) => {
  res.json({
    name: "asd"
  })
});

app.get('/posts',(req,res) => {
  res.json({
    name: "posts",
    asd: "hello"
  })
  /*if(req.query.category){
    Post.find({category: req.query.category}).then((data) => res.json(data));
  }else{
    Post.find({}).then((data) => res.json(data));
  }*/
});

app.get('/categories',(req,res) => {
  Category.find({}).then((data) => res.json(data));
});

app.get('/posts/:postId',(req,res) => {
  const postId = req.params.postId;
  Post.findOne({_id : postId}).then((data) => {
    res.json(data);
  })
});

app.delete('/deletepost/:postId',(req,res) => {
  const postId = req.params.postId;
  Post.findByIdAndRemove(postId).then(res.send("deleted"));
});

app.post('/addpost',(req,res) => {
  Post.create({
    title: "Altıncı Blog Yazısı",
    content: "Altıncı Blog Yazısı İçeriği Altıncı Blog Yazısı İçeriği",
    author: "Samet Atasever",
    category: "5ebda60434510a17b4a10509",
    slug: "besinci-blog-yazisi",
    image: "https://cdn.pixabay.com/photo/2020/04/07/17/01/chicks-5014152_960_720.jpg",
    date: undefined
  }).then(data => res.json(data));
});

app.post('/addcategory',(req,res) => {
  Category.create({name: "Tüm Kategoriler"}).then(data => { res.json(data)})

});

app.listen(process.env.PORT || 3000);