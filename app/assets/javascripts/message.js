$(function(){
  function buildHTML(message){
    var image ="";
    if (message.image){
      image = `<br>
               <p><img src='${message.image.url}'></p>`
    }
    var html =`<span class="name">${message.user}</span>
               <span class="date">${message.created_at}</span>
               <br>
               <p>${message.message}</p>
               ${image}`
     return html;
  }

  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages__body__message__infomation').append(html);
     })
    .fail(function(){
      alert('error');
    });
  });
});
