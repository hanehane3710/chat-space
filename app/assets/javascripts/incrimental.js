$(function(){
  function userSearch(user){
    var html =`<div class="chat-group-user clearfix js-chat-member">
                <p class="chat-group-user__name">${user.user_name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add js-add-btn" data-user-id="${user.id}" data-user-name="${user.user_name}">追加</a>
               </div>`
    $('#user-search-result').append(html);
      }

  function addMember(user_data){
    var user_id = user_data['userId'];
    var user_name = user_data['userName'];
    var add_member =`
                    <div class="chat-group-user js-chat-member clearfix" id="chat-group-user-${user_id}">
                     <input name="group[user_ids][]" type="hidden" value="${user_id}">
                     <p class="chat-group-user__name">${user_name}</p>
                     <a class="chat-group-user__btn chat-group-user__btn--remove js-remove-btn">削除</a>
                    </div>`

      $('#chat-group-users').append(add_member);
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
      $('#user-search-result').empty();
      if (users.length !== 0){
        users.forEach(function(user){
           userSearch(user);
        });
       }
      })
    .fail(function(){
      alert("検索に失敗しました");
    })
 });
  $('#user-search-result').on("click",".chat-group-user__btn--add",function(){
      var user_data = $(this).data();
       addMember(user_data);
       $(this).parent().remove();

      })
      $('.chat-group-user').on("click",".chat-group-user__btn--remove",function(){
       $(this).parent().remove();
    })
});

