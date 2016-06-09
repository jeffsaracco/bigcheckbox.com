var KEY = "bigcheckbox";
var items = localStorage.getItem(KEY) ? JSON.parse(localStorage.getItem(KEY)) : [];

function addItem(item) {
  var template = $('#template').html();
  var listLength = $('#list li').length;
  template = template.replace(/#{id}/g, listLength);
  template = template.replace(/#{li_id}/g, listLength);
  template = template.replace("#{text}", item.label);

  $('#list').append(template);

  if(item.checked) {
    $("#checkbox-" + listLength).prop("checked", true);
  }

  var size = 1000/item.label.length;
  if (size > 95){ size = 95; }
  if (size < 30 ) {size = 35; }
  $('#li-' + listLength).css("font-size", size );
}

$(function(){
  $('#new-item').on("submit", function(e){
    e.preventDefault();

    $item = $('#item-text');
    newItem = $item.val().trim();
    if(newItem != '') {
      $item.val('');
      var item = {label: newItem, checked: false};
      addItem(item);
      items.push(item);
      localStorage.setItem(KEY, JSON.stringify(items));
    }
  });

  $('ul').click(function(event){
    event.preventDefault();
    var id = event.target.id;
    id = id.match(/-([0-9])*/)[1];

    var checked = !$('#checkbox-'+id).prop("checked");

    items[parseInt(id)].checked = checked;
    localStorage.setItem(KEY, JSON.stringify(items));

    $('#checkbox-'+id).prop("checked", checked)
  });

  $('.clear').click(function(event) {
    localStorage.removeItem(KEY);
    $('#list li').remove();
  });

  items.forEach(function(item) {
    addItem(item);
  });

  $('#item-text').focus()
});
