const express = require("express");
const router = express.Router();
var client = require('./db').pool;
client.connect();

//  RETRIEVE ALL RECORDS FROM DATABASE TABLE NOW

router.get('/countries', async (req, res, next) => {

    try{
        //const client = await pool.connect();
        let dbRes = await client.query('SELECT * FROM countries ORDER BY id ASC');
        res.status(200).json(dbRes.rows);
        //client.release();
    }catch(err){
        console.error(err);
        await res.status(500).json({error: err});
        //client.release();
    }
})

// ADD NEW RECORD INTO THE DATABASE NOW!!

router.post('/', async (req, res, next) => {
   
        const { name, capital } = req.body;
        try{
        //const client = await pool.connect();
        let dbRes = await client.query('INSERT INTO countries (name, capital) VALUES ($1, $2) RETURNING id', [name, capital])
        res.status(200).send(dbRes.rows);
        //client.release();
        }catch(err){
            console.error(err);
            await res.status(500).json({error: err});
            //client.release();
        }
})

// CREATE ROUTE FUNCTION TO UPDATE EXISTING DATABASE RECORDS

router.put('/:id', async (req, res, next) => {

        const id = parseInt(req.params.id)
        const { name, capital } = req.body
        try{
            //const client = await pool.connect();
            let dbRes = await client.query('UPDATE countries SET name = $1, capital = $2 WHERE id = $3', [name, capital, id])
            res.status(200).send(dbRes.rows[0]);
           // client.release();
        }catch(err){
            console.error(err);
            await res.status(500).json({error: err});
            //client.release();
        }
})

// CREATE ROUTE FUNCTION TO DELETE A RECORD FROM THE DATABASE TABLE

router.delete('/:id', async (req, res, next) => {
    
    const id = parseInt(req.params.id)
    try{
        //const client = await pool.connect();
        let dbRes = await client.query('DELETE FROM countries WHERE id = $1', [id])
        res.status(200).send({});
        
        //client.release();
    }catch(err){
        console.error(err);
        await res.status(500).json({error: err});
        //client.release();
    }
})
module.exports = router;