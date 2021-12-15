API_KEY = "ST_MzdjYzYwN2EtZTIyNy00MjZkLTk3MGMtYzY3ODg3NjBjNzg0NjM3NzM1OTYyNTY5NjM2MzY5"
GET_ORDER_URL = "https://app.snipcart.com/api/orders/"

const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

async function initFunc() {
  const request = await fetch(`${GET_ORDER_URL}${token}`, {
      headers: {
        'Authorization': `Basic ${btoa(API_KEY)}`,
        'Accept': 'application/json'
      }
    });
  const result = await request.json();
  $('#qr').ClassyQR({
     create: true, 
     type: 'text',
     text: result.billingAddressName
  });
};
