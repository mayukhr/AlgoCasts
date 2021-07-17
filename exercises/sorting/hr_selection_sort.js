function selectionSort(a) {
    counter=0;
    
    //to move boundary left to right
    for(let i = 0; i< a.length-1; i++) {  
      //find minimum
      let minidx = i;
      for(let j=i+1; j<a.length; j++) {
        if(a[j] < a[minidx])
          minidx = j;
      }
      
      //swap
      if(a[i]>a[minidx]) {
        let temp = a[i];
        a[i] = a[minidx];
        a[minidx] = temp;
        counter++;
       }
    }
    return a;
  }
  console.log(selectionSort([6, 0]))