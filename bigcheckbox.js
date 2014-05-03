$(function(){
  $('#new-item').on("submit", function(e){
    e.preventDefault();

    $item = $('#item-text');
    newItem = $item.val().trim();
    if(newItem != '') {
      $item.val('');
      template = $('#template').html();
      listLength = $('#list li').length;
      template = template.replace(/#{id}/g, listLength);
      template = template.replace(/#{li_id}/g, listLength);
      template = template.replace("#{text}", newItem);
      $('#list').append(template);
      size = 1000/newItem.length;
      if (size > 95){ size = 95; }
      if (size < 30 ) {size = 35; }
      $('#li-' + listLength).css("font-size", size );
      if (listLength >= 4){ adjustFooter(); }
    }
  });
});

$(function(){
  $('ul').click(function(event){
    event.preventDefault();
    var id = event.target.id;
    if (id ==="" ){ id = event.target.parentElement.id; }
    if ($('#'+id).prop("checked")){
      $('#'+id).prop("checked", false)
    } else {
      $('#'+id).prop("checked", true);
    }
  });
});

function adjustFooter(){
  var bottom = $('footer').css("bottom")
  bottom = bottom.substring(0, bottom.length - 2);
  bottom = parseInt(bottom, 10);
  bottom -= 104;
  bottom = bottom.toString()+"px";
  $('footer').css("bottom", bottom)
};



