 async function lookupUser (user) {
    // TODO:error handling
    const starttime = new Date();
    const userCollection = context.services.get('mongodb-atlas').db('__atlasforms').collection('users');
    const cursor =  userCollection.find({ _id: user }).limit(1);
    this.userRecord = await cursor.next();
    
   console.log(new Date() - starttime);
  }
  
  exports = async function(arg){
  for(x=0;x<100;x++) {
    await lookupUser("6374e49c7cc031132a154f32");
  }
  return {arg: arg};
};