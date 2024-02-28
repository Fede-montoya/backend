const mongoose = require ('mongoose')

const connect = async () => {
    return mongoose.connect('')
    .then(()=>{






    }).catch((err)=>{
        console.log(err)
    })

    
}


connect()