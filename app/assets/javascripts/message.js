$(document).on('turbolinks:load', function() {
  function buildHTML(message){
    var image ="";
    if (message.image){
      image = `<br>
               <p><img src='${message.image.url}' class="image"></p>`
    }
    var html =`<br>
              <div class="message" data-message-id="${message.id}">
              <br>
              <span class="name">${message.user_name}</span>
              <span class="date">${message.created_at}</span>
              <br>
              <p>${message.message}</p>
              ${image}
              </div>`
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
  //自動更新
  function buildHTML(message) {
  var image = '';
  if (message.image.url) {
    image = `<img src="${message.image.url}" class="image">`;
  }
  var html = `<br>
              <div class="message" data-message-id="${message.id}">
              <br>
              <span class="name">${message.user_name}</span>
              <span class="date">${message.created_at}</span>
              <br>
              <p>${message.message}</p>
              ${image}
              </div>`;
  return html;
}
  var interval = setInterval(function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)) {
    $.ajax({
      url: location.href.json,
      dataType: 'json'
    })
    .done(function(messages) {
      var id = $('.message').data('message-id');
      var html = '';
      messages.forEach(function(message){
        console.log(message);
        if (message.id > id ) {
          html += buildHTML(message);
        }
      });
      $('.messages__body__message__infomation').prepend(html);
    })
    .fail(function(json) {
      alert('自動更新に失敗しました');
    });
  } else {
    clearInterval(interval);
   }} , 5 * 1000 );
});
