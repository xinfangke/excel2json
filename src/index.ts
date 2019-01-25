import * as index from "./decode";

if(process.argv[2]==null){
    throw new Error("argv sourcepath does not exist;exit 1;");
}
if(process.argv[3]==null){
    throw new Error("argv targetpath does not exist;exit 1;");
}
if(process.argv[4]==null){
    throw new Error("argv interfacepath does not exist;exit 1;");
}

index.main(process.argv[2],process.argv[3],process.argv[4]);