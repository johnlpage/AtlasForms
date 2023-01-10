 async function lookupUser (user) {
    // TODO:error handling
    const starttime = new Date();
    const userCollection = context.services.get('mongodb-atlas').db('__atlasforms').collection('users');
    const cursor =  userCollection.find({ _id: user }).limit(1);
    this.userRecord = await cursor.next();
    
   console.log(new Date() - starttime);
  }
  
  exports = function(arg){
  for(x=0;x<100;x++) {
    lookupUser("");
  }
  return {arg: arg};
};