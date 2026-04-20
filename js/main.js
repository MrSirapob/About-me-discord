const recGames = [
  {
    image: "assets/images/RE4.jpg",
    name: "Resident Evil 4",
    desc: "Resident Evil 4 Remake เรียกได้ว่าเป็นเกมแอคชั่นเต็มตัว ไล่ยิงหัวกันมันส์ ๆ เล่นเพลินมาก แต่ก็ยังคงความหลอนและบรรยากาศกดดันไว้ได้ดี RE4 ยังเก็บกลิ่นอายต้นฉบับไว้อยู่ ใครยังไม่เคยลอง แนะนำให้ลองดู ตอนนี้มีทั้งซับไทยและพากย์ไทยแล้ว",
  },
  {
    image: "assets/images/sekiro.jpg",
    name: "Sekiro",
    desc: "Sekiro เป็นเกมที่ขึ้นชื่อเรื่องการแพรี่ได้มันที่สุด จากประสบการณ์ส่วนตัว เล่นไป 30+ ชม. แล้วยอมรับจริง ๆ ว่าแพรี่สนุกสมกับคำล่ำลือ ใครที่กำลังหาเกมแนว Soul แพรี่สนุก แนะนำเกมนี้เลยครับ",
  },
];

function buildGrid(games, containerId, type) {
  const grid = document.getElementById(containerId);
  games.forEach((g) => {
    const card = document.createElement("div");
    card.className = "game-icon-card";
    card.innerHTML = `
      <div class="icon">
        <img src="${g.image}" alt="${g.name}" />
      </div>
      <div class="name">${g.name}</div>`;
    card.onclick = () => openModal(g, type);
    grid.appendChild(card);
  });
}

function openModal(game, type) {
  const modalIcon = document.getElementById("modal-icon");
  modalIcon.innerHTML = game.image
    ? `<img src="${game.image}" alt="${game.name}" />`
    : "";
  document.getElementById("modal-title").textContent = game.name;
  document.getElementById("modal-type").textContent =
    type === "played" ? "// เคยเล่นแล้ว" : "// แนะนำเลย";
  document.getElementById("modal-body").textContent = game.desc;
  document.getElementById("modal").classList.add("open");
}

function closeModal(e) {
  if (e.target === document.getElementById("modal")) {
    document.getElementById("modal").classList.remove("open");
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape")
    document.getElementById("modal").classList.remove("open");
});

buildGrid(recGames, "rec-grid", "recommend");
