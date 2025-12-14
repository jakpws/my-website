function toggleTeam(header) {
  // หา card ที่ถูกคลิก
  const card = header.parentElement;

  // หา body และ arrow ภายใน card นั้น
  const body = card.querySelector(".team-body");
  const body1 = card.querySelector(".team-body1");
  const arrow = card.querySelector(".arrow");

  // toggle เปิด/ปิด
  body.classList.toggle("show");
  body1.classList.toggle("show");
  arrow.classList.toggle("rotate");
}