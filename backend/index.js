const express = require('express');
const bodyParser =  require('body-parser');
const app = express();
const mysql = require('mysql2/promise');
const cors = require('cors');
const port = 8000

app.use(bodyParser.json());
app.use(cors());

let users=[]
let counter = 1;

let conn = null;
const initDBConnection = async () =>{
    conn = await mysql.createConnection({
        host: 'localhost',
        user:'root',
        password: 'root',
        database: 'webdb',
        port: 8821
    })
}

app.get('/users', async(req, res) => {
    const result = await conn.query('SELECT * FROM users')
    res.json(result[0]);
})

/*
//path = GET /users สำหรับ get ข้อมูล user ทั้งหมด
app.get('/users/:id', async(req, res) => {
    try{
        let id = req.params.id
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id)
        if (results[0].length == 0){
            throw { statusCode: 404 , message: 'User not found'};
        }
        res.json(results[0][0]);
    }
    catch (error) {
        console.error('Error fecthing user:',error.message);
        let.statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error fecthing user',
            error: error.message
        });    
        }
    });
    */
    



//path = POST /user สำหรับเพิ่ม user ใหม่
app.post('/users', async(req, res) => {
    try{
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?', user);
    console.log('results:', results);
    res.json({
        message: 'User create successfully',
        data: results[0]
    });
}catch (error) {
        console.error('Error creating user:',error);
        res.status(500).json ({
            message: 'Error creating user',
            error: error.message
        });
    }
});


app.put('/users/:id', async(req, res) => {
    try{
        let id = req.params.id
        let updatedUser = req.body;
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id)
        if (results[0].length == 0){
            throw { statusCode: 404 , message: 'User not found'};
        }
        res.json({
        message: 'User updateed successfully',
        data: updatedUser
    });
}
    catch (error) {
        console.error('Error fecthing user:',error.message);
        let.statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error fecthing user',
            error: error.message
        });    
        }
    });



//path = DELETE /user/:id
app.delete('users/:id', async (req, res) =>{
    try{
        let id = req.params.id
        let DelectedUser = req.body;
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id)
        if (results[0].length == 0){
            throw { statusCode: 404 , message: 'User not found'};
        }
        res.json({
        message: 'User Delected successfully',
        data: DelectedUser
    });
}
    catch (error) {
        console.error('Error Delecting user:',error.message);
        let.statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error Deleting user',
            error: error.message
        });    
        }
    });



  app.listen(port, async() => {
    await initDBConnection();
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


/*
app.get('/testdb',(req, res) => {
    mysql.createConnection({
        host: 'localhost',
        user:'root',
        password: 'root',
        database: 'webdb',
        port: 8821
    }).then((conn) => {
        conn.query('SELECT * FROM users')
        .then((results) => {
            res.json(results[0]);
        }).catch((err) => {
            console.error(err);
            res.status(500).json({error: 'Database query error'});
        });
    })
})
    */


/*
app.get('/testdb-new', async (req, res) => {
    try{
        const conn = await mysql.createConnection({
        host: 'localhost',
        user:'root',
        password: 'root',
        database: 'webdb',
        port: 8821
    })
    const[results] = await conn.query('SELECT * FROM users')
    res.json(results[0]);
    }catch(err){
        console.error(err);
        res.status(500).json({error: 'Database query error'});
    }
    
})
    */

/*
//path = GET /users สำหรับ get ข้อมูล user ทั้งหมด
app.get('/users', async(req, res) => {
    const result = await conn.query('SELECT * FROM users')
    res.json(result[0]);
})


//path  =  /test
app.get('/user',(req, res) => {
    res.json(users);
});
*/

/*
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
*/



/*
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
*/