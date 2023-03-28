function generateQRCode(data) {
  const imgbox = document.getElementById('imgbox');
  const data_input = document.getElementById('data_input');
  imgbox.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + data_input.value;
}

function generateBarcode(data_input) {
  JsBarcode("#barcode", data_input, {
    format: 'code128',
    displayValue: true,
  });
}

function encryptData(data) {
  var encodedstring;
  var basestring = document.getElementById('data_input').value;
  encodedstring = window.btoa(basestring);
  document.getElementById('textbox').value = encodedstring;
  document.getElementById('textbox').style.display = 'block';
}

function decryptData(data) {
  var decodedstring;
  var upstring = document.getElementById('data_input').value;
  decodedstring = window.atob(upstring);
  document.getElementById('textbox1').value = decodedstring;
  document.getElementById('textbox1').style.display = 'block';
}

function generateData() {
  const inputData = document.getElementById('data_input').value;
  if (inputData == '') {
    alert('Please enter some data before generating.');
    return false;
  }

  const generatorType = document.getElementById('generator-type').value;
  switch (generatorType) {
    case 'qr':
      generateQRCode(inputData);
      break;
    case 'barcode':
      generateBarcode(inputData);
      break;
    case 'encryption':
      encryptData(inputData);
      break;
    case 'decryption':
      decryptData(inputData);
      break;
    default:
      console.log('Invalid generator type');
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  generateData();
});
