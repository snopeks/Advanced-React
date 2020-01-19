// this is where your database calls will go regardless of what db you are using on the backend. 
const { forwardTo } = require('prisma-binding');

const Query = {
    items: forwardTo('db'), 
    // async items(parent, args, ctx, info){
    //     const items = await ctx.db.query.items();
    //     return items; 
    // }

};

module.exports = Query;
