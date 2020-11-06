const clarifai = require('clarifai');
const app= new Clarifai.App({
    apiKey:'16a76c006cef49e89adccc2b81bcfb6f'
  }); 

  const HandleApiCall = (req,res) => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with api'))
  }


const handleImage =(req,res, db)=> {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0])
    })
    .catch(err => res.status(400).json('Unable to Get Entries'))
    }

    module.exports= {
        handleImage:handleImage,
        HandleApiCall
    }