$(function(){
  $.get('https://www.reddit.com/r/awwjjjj.json')
  .done(function(data){
      localStorage.setItem('awwData', JSON.stringify(data));
      appendImagesToMain(data);
  })
  .fail(function(){
    console.log('Failed!');
    var offLineData = JSON.parse( localStorage.getItem('awwData') );
    appendImagesToMain(offLineData);
  })

  appendImagesToMain = function(data){
    var $imageArea = $('#imageArea');
    for (i=0;i<data.data.children.length; i++){
      console.log(data.data.children[i].data.thumbnail);
        $imageArea.append('<img src="'+data.data.children[i].data.thumbnail+'">');
    }
  }
})
