const user = require('../models/user')

const index = (req, res) => {
    user.find().then(data => {
        res.json({
            data
        })
    }).catch(error => {
        res.json({
            message: "an error occured"
        })
    })
}


const show = (req, res) => {
    let userId = req.body.userId
    user.findById(userId).then(data => {
        res.json({
            data
        })
    }).catch(error => {
        res.json({
            message: "an error occured",
            err: error.message
        })
    })
}

const store = (req, res) => {
    try {
        let new_user = new user({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age
        })
        console.log(new_user)
        new_user.save(function(err,result){
            if (err){
                return res.send(err);
            }
            else{
                return res.send({data: result, msg:"created successfuly", success:true})
            }
        })
    } catch (err) {
        return res.send({ msg: err.message, success: false })
    }

}


const update = (req, res) => {
    let userId = req.body.userId
    let updateData = {
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age
    }

    user.findByIdAndUpdate(userId, { $set: updateData })
        .then(() => {
            res.json({
                message: 'user updated successfully'
            })
        }).catch(error => {
            res.json({
                message: 'an error occured'
            })
        })

}

const destroy = (req, res) => {
    let userId = req.body.userId;
    user.findOneAndDelete(userId)
        .then(() => {
            res.json({
                message: "user deleted successfully "
            })
        }).catch(error => {
            res.json({
                message: "an error occured"
            })
        })
}

module.exports = {
    index, show, store, update, destroy
}

