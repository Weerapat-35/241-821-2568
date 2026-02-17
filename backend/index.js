const express =  require('express');
const bodyParser =  require('body-parser');
const app = express();

const port = 8000

app.use(bodyParser.text());
let users=[]
let counter = 1;
//path  =  /test
app.get('/user',(req, res) => {
    res.json(users);
});


//path = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    users.id = counter
    counter += 1;
    users.push(user);
    res.json({
        message: 'User added successfully',
        user: user });
})

//path = PUT/user/:id
app.put('user/:id', (req, res) => {
    let id = reqparams.id;
    let.updatedUser = req.body;
    //user จาก id ที่ส่งมา
    let seletedIndex = users.findIndex(user => user.id == id);

    //อัพเดทข้อมูล user
    if (updatedUser.name){
        users[seletedIndex].name = updatedUser.name;
    }

    if (updatedUser.email){
        users[seletedIndex].email = updatedUser.email;
    }

    //users[seletedIndex].name = updatedUser.name|| users[seletedIndex].name;
    //users[seletedIndex].email = updatedUser.email|| users[seletedIndex].email;


    //เอาข้อมุลที่update ส่ง response กลับไป
    res.json({
        message: 'User updateed successfully',
        data: {
            user: updatedUser,
            indexUpdated: seletedIndex
        }
    });
})


//path = DELETE /user/:id
app.delete('user/:id', (req, res) =>{
    let id = req.params.id;
    //หา index ของ user ที่ต้องการจะลบจาก id ที่ส่งมา
    let seletedIndex = users.findIndex(user => user.id == id);
    //ลบ user จาก array โดยใช้ delect
    users.slice(seletedIndex, 1);

    res.json({
        message: 'User delected successfully',
            indexdelected: seletedIndex
    });
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

/*
app.get('/test',(req, res) => {
    let user = {
        name: 'john Ja',
        age: 20,
        email: 'Johnja@gmail.com'
    }
    res.json(user)
});
*/