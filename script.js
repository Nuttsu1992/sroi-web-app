// ตัวอย่างการใช้ Chart.js เพื่อดึงข้อมูลจาก Sheet (จำเป็นต้องมี GAS doGet)
fetch('https://script.google.com/macros/s/your-gas-url/exec') 
  .then(response => response.json())
  .then(data => {
    const ctx = document.getElementById('sroiChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['SROI', 'งบประมาณ'],
        datasets: [{
          label: 'SROI',
          data: [data.sroi, data.budget],
          backgroundColor: ['#28a745', '#ffc107']
        }]
      }
    });
  });