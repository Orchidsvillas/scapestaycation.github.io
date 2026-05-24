function bookNow() {

  let villa = document.getElementById("villa").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;
  let adults = document.getElementById("adults").value;
  let children = document.getElementById("children").value;
  let guest = document.getElementById("guest").value;
  let phone = document.getElementById("phone").value;

  let message =
`SCAPE STAYCATION BOOKING

Villa: ${villa}

Check in: ${checkin}
Check out: ${checkout}

Adults: ${adults}
Children: ${children}

Guest Name: ${guest}

Phone: ${phone}`;

  let whatsapp =
"https://wa.me/84333243243?text=" + encodeURIComponent(message);

  window.open(whatsapp, "_blank");
}
function bookService() {
  let villa = document.getElementById("serviceVilla").value;
  let service = document.getElementById("serviceName").value;
  let date = document.getElementById("serviceDate").value;
  let time = document.getElementById("serviceTime").value;
  let room = document.getElementById("roomNumber").value;
  let quantity = document.getElementById("serviceQuantity").value;
  let phone = document.getElementById("servicePhone").value;
  let note = document.getElementById("serviceNote").value;

  let message =
`SCAPE STAYCATION SERVICE REQUEST

Villa: ${villa}
Service: ${service}
Date: ${date}
Time: ${time}
Room number: ${room}
Quantity / Guests / Days: ${quantity}
Phone: ${phone}
Note: ${note}`;

  let whatsapp =
"https://wa.me/84904624675?text=" + encodeURIComponent(message);

  window.open(whatsapp, "_blank");
}
