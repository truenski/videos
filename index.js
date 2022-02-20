const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

const videos = [
    3dKq_oVEHUQ,
    z1GhbKc7D2s,
    FALknonwMD4,
    zNuAkeD6Go]

app.get('api/videos', (req, res) => { res.send(videos); })

//toda pasta acessível ao node.
// Em desenvolvimento, não. Em produção, sim.
if(process.env.NODE_ENV != 'development' ){
app.use(express.static(path.join(__dirname, 'client/build')))


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html', function (err) {
        if (error) {
            res.status(500).send(error)
        }
    }))
})
}

app.listen(3000, () => { console.log('RUGBY') })
