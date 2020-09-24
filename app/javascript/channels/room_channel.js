import consumer from "./consumer"

document.addEventListener('turbolinks:load', () => {
    const current_room_element = document.getElementById('current_room_id');
    const current_room_id = current_room_element.getAttribute('data-room-id');

    consumer.subscriptions.create({ channel: "RoomChannel", room_id: current_room_id }, {
      connected() {
          console.log("connected!")
      },

      disconnected() {
        // Called when the subscription has been terminated by the server
      },

      received(data) {
          console.log(data)
          const messageContainer = document.getElementById('messages')

          var html = new DOMParser().parseFromString('', 'text/xml');
          html.getElementsByTagName('html')[0].innerHTML = data.html

          const current_user_element = document.getElementById('current_user_id');
          const current_user_id = current_user_element.getAttribute('data-user-id');

          if (current_user_id != data.message.user_id) {
              html.getElementById("message").classList.remove('me');
          } else {
              html.getElementById("message").classList.add('me');
          }
          messageContainer.innerHTML = messageContainer.innerHTML + html.getElementsByTagName('html')[0].innerHTML
      }
    });
})
