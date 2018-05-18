module.exports = app => {
    return class User extends app.Service {
        * add() {
           const data = this.ctx.params.data;
           const result = yield this.app.mysql.insert('demo',{'data':data});
           if(result.serverStatus == 2){
                return "success";
           }else{
               return "fail";
           }
        }
    }
};