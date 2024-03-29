const  jwt = require('jsonwebtoken');

exports.generationToken = async (data) =>{

    return jwt.sign(data,global.SALT_KEY,{expiresIn: '1d'});

}

exports.decodeToken = async (token) =>{

    var  data = await jwt.verify(token, global.SALT_KEY);
    return data;

}

exports.authorize = function (req,res,next){

    var  token  = req.body.token || req.query.token || req.headers['x-access-token'];

    if(!token){

       res.status(401).json({message:'Acesso restrito'});

    }else{

    jwt.verify(token,global.SALT_KEY, (error,decoded)=>{

        if(error){

            res.status(401).json({message:'token invalido'});
        }else{

            next();
        }
    });

    }



}