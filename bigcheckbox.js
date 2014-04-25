$(function(){
  $('#new-item').on("submit", function(e){
    e.preventDefault();

    $item = $('#item-text');
    newItem = $item.val().trim();
    if(newItem != '') {
      $item.val('');
      template = $('#template').html();
      template = template.replace(/#{id}/g, $('#list li').length);
      template = template.replace("#{text}", newItem);
      $('#list').append(template);
    }
  });
});
