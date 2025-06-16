document.getElementById("sroiForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  // ⚠️ เปลี่ยน URL เป็นของคุณเองหลัง deploy GAS
  const GAS_URL = "https://script.google.com/macros/s/your-gas-url/exec"; 

  fetch(GAS_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(json => {
    const sroi = json.sroi.toFixed(2);
    document.getElementById("result").innerHTML = `
      <strong>SROI ของโครงการนี้คือ:</strong> ${sroi}<br>
      หมายความว่า ทุก 1 บาทที่ลงทุน จะได้ผลตอบแทนทางสังคม ${sroi} บาท
    `;
    document.getElementById("result").style.display = "block";
  })
  .catch(err => {
    alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    console.error(err);
  });
});