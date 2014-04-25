$(function(){
  $('#new-item').on("submit", function(e){
    e.preventDefault();

    $item = $('#item-text');
    newItem = $item.val();
    $item.val('');
    template = $('#template').html();
    template = template.replace("#{id}", $('#list li').length);
    template = template.replace("#{text}", newItem);
    $('#list').append(template);
  });
});
