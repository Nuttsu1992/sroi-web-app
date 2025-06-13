document.getElementById("sroiForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  fetch("https://script.google.com/macros/s/AKfycbx6JBCzbQWQyUTfbiV6N87sEaVrC0btuB7R38i1kncZg_q89Tq8O6itmF3LgTvtOaVzPA/exec",  {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(json => {
    const sroi = (json.sroi).toFixed(2);
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
