// this is where your database calls will go regardless of what db you are using on the backend. 
const Query = {
    dogs(parent, args, ctx, info){
        global.dogs = global.dogs || [];
        return global.dogs;
    }

};

module.exports = Query;
