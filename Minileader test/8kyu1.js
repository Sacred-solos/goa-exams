//Whats the real floor?
function getRealFloor(n) {
    if (n<=0){
      return n;
    }
   else if (n>0 && n<13){
      return n-1;
   }
  else{
     return n-2;
  }
    
}