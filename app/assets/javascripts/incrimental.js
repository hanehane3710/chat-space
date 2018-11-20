$(function(){
  function buildHTML(user){
    var html =`<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.user_name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add js-add-btn">追加</a>
               </div>`
    $('.chat-group-form__search').append(html);
      }
  $('#user-search-field').on('keydown',function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(users){
      $('.chat-group-form__search').find('.chat-group-user').remove();
      if (users.length !== 0){
        users.forEach(function(user){
           buildHTML(user);
        });
      }
    })
  });
});
