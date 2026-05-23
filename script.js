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
