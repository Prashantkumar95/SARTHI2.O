// import mongoose from "mongoose";

// const mongodbUrl=process.env.MONGODB_URL

// if(!mongodbUrl){
//  throw new Error("db error")
// }



// let cached=global.mongoose
// if(!cached){
//     cached=global.mongoose={conn:null,promise:null}
// }

// const connectDb=async ()=>{
//     if(cached.conn){
       
//         return cached.conn
//     }

//     if(!cached.promise){
      
//         cached.promise=mongoose.connect(mongodbUrl).then((conn)=>conn.connection)
//     }
//     try {
//         const conn=await cached.promise
//         return conn
//     } catch (error) {
//         console.log(error)
//     }

// }

// export default connectDb


import mongoose from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

const MONGODB_URL = process.env.MONGODB_URL;

if (!global.mongooseCache) {
  global.mongooseCache = {
    conn: null,
    promise: null,
  };
}

const cached = global.mongooseCache;

async function connectDb() {
  try {
    // already connected
    if (cached?.conn) {
      return cached.conn;
    }

    // missing env
    if (!MONGODB_URL) {
      console.warn("MONGODB_URL is missing");
      return null;
    }

    // create connection promise
    if (!cached?.promise) {
      cached!.promise = mongoose.connect(MONGODB_URL, {
        dbName: "sarthi",
      });
    }

    // wait for connection
    cached!.conn = await cached!.promise;

    console.log("MongoDB Connected");

    return cached!.conn;
  } catch (error) {
    console.error("MongoDB Connection Error:", error);

    cached!.promise = null;

    return null;
  }
}

export default connectDb;