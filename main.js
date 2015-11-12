$.get('https://www.reddit.com/r/aww.json', function(data){
  for (i=0;i<data.data.children.length; i++){
    console.log(data.data.children[i]);
  }

})
