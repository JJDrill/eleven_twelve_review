$(function(){
    $.get('https://www.reddit.com/r/aww.json', function(data){
        var $imageArea = $('#imageArea');
        for (i=0;i<data.data.children.length; i++){
          console.log(data.data.children[i].data.thumbnail);
            $imageArea.append('<img src="'+data.data.children[i].data.thumbnail+'">');
        }
      })
})
