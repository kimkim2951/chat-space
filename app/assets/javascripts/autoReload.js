$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html = 
        `<div class="chat-list" data-message-id=${message.id}>
          <div class="chat-list__box">
            <p class="chat-list__box__info-user">
              ${message.user_name}
            </p>
            <p class="chat-list__box__info-date">
              ${message.created_at}

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
        `<div class="chat-list" data-message-id=${message.id}>
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

  let reloadMessages = function() {
    let last_message_id = $('.chat-list:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.chat-main').append(insertHTML);
        $('.chat-main').animate({ scrollTop: $('.chat-main')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});