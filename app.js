document.addEventListener("DOMContentLoaded", async () => {
  const ul = document.getElementById("appointments");
  if (!ul) return;
  const res = await fetch("/appointments");
  const appointments = await res.json();
  ul.innerHTML = appointments.map(a => `
    <li class="list-group-item">
      ${a.patient_name} - ${new Date(a.appointment_time).toLocaleString()}
    </li>`).join("");
});
