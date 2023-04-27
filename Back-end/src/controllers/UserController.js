const UserService = require("../services/UserService");

module.exports = {

    getAll: async (req, res) => {
        let json = {error:'', result:[]};

        let users = await UserService.getAll();
        console.log(users)
        if(users){
            json.result = users;
        }
        res.json(json);
    }

}