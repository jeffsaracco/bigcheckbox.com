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
    }
  });

  $('div').on("click", function(e){

  });
});
