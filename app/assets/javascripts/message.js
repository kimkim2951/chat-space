$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html = 
        `<div class="chat-list">
          <div class="chat-list__box">
            <p class="chat-list__box__info-user">
              ${message.user_name}
            </p>
            <p class="chat-list__box__info-date">
              ${message.created_at}
            </p>
          </div>
          <div class="chat-list__message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html = 
        `<div class="chat-list">
          <div class="chat-list__box">
            <p class="chat-list__box__info-user">
              ${message.user_name}
            </p>
            <p class="chat-list__box__info-date">
              ${message.created_at}
            </p>
          </div>
          <div class="chat-list__message">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('.form-updata').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,  
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.chat-main').append(html);
      $('form')[0].reset();
      $('.chat-main').animate({ scrollTop: $('.chat-main')[0].scrollHeight});
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    })
  });
});