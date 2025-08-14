const qrText = document.getElementById("qr-text");
const generateBtn = document.getElementById("generate-btn");
const qrSection = document.querySelector(".qrcode");
const downloadBtn = document.getElementById("download-btn");
let qr;

generateBtn.addEventListener("click", () => {
  // Remove previous QR code if any
  qrSection.innerHTML = "";
  const value = qrText.value.trim();
  if (!value) return;
  qr = new QRCode(qrSection, { text: value, width: 200, height: 200 });
  downloadBtn.style.display = "inline-block";
});

downloadBtn.addEventListener("click", () => {
  // Find the generated canvas or img and trigger download
  let img = qrSection.querySelector("img") || qrSection.querySelector("canvas");
  if (!img) return;
  let url = img.src || img.toDataURL();
  let a = document.createElement("a");
  a.href = url;
  a.download = "qrcode.png";
  a.click();
});
