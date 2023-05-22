const wrapper = document.querySelector('.wrapper'),
  qrInput = document.querySelector('.form input'),
  generateBtn = document.querySelector('.form button'),
  qrImg = document.querySelector('.qr-code img');

generateBtn.addEventListener('click', () => {
  generateQrCode();
});

qrInput.addEventListener('keyup', (el) => {
  if (el.key === 'Enter' || el.keyCode === 13) {
    generateQrCode();
  }
});

qrInput.addEventListener('keyup', () => {
  if (!qrInput.value) {
    wrapper.classList.remove('active');
  }
});

const generateQrCode = () => {
  let qrValue = qrInput.value;
  if (!qrValue) return;
  generateBtn.innerText = 'Generating QR-Code...';
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImg.addEventListener('load', () => {
    wrapper.classList.add('active');
    generateBtn.innerText = 'Generate QR-Code';
  });
};
