const recGames = [
  {
    image: "assets/images/RE4.jpg",
    name: "Resident Evil 4 Remake",
    desc: "Indie Metroidvania ที่ดีที่สุดที่เคยเล่น art style สวยงาม เนื้อเรื่องลึกมากแม้ไม่มี dialogue เยอะ combat สนุก ราคาถูกแต่ content เยอะมากๆ ต้องลอง",
  },
  {
    image: "",
    name: "Hades",
    desc: "Roguelike ที่เล่นแล้วติดมากที่สุด ทุก run ไม่เหมือนกัน เนื้อเรื่อง progress แม้ตาย voice acting ดีมาก ถ้าชอบ action ต้องลองจริงๆ",
  },
  {
    image: "",
    name: "Stardew Valley",
    desc: "เกม chill ที่ดีที่สุดสำหรับวันที่เครียด farm สร้างความสัมพันธ์กับชาวบ้าน เวลาผ่านไปโดยไม่รู้ตัว เหมาะกับคนที่อยากพักจาก game competitive",
  },
  {
    image: "",
    name: "The Witcher 3",
    desc: "RPG ที่ดีที่สุดตลอดกาลในความคิดเห็นส่วนตัว เนื้อเรื่อง side quest ดีกว่า main quest บางเกม ตัว Geralt เป็น character ที่น่าสนใจมาก ไม่เล่นถือว่าพลาดมาก",
  },
  {
    image: "",
    name: "Disco Elysium",
    desc: "RPG ที่ไม่มี combat เลย แต่สนุกกว่าหลายเกมที่มี dialogue ลึกมาก ตัวเลือกสะท้อนความเป็นตัวเอง writing ดีที่สุดที่เคยเห็นในวิดีโอเกม",
  },
  {
    image: "",
    name: "It Takes Two",
    desc: "Co-op ที่ดีที่สุดสำหรับเล่นกับเพื่อนหรือคู่ ทุก chapter มี mechanic ใหม่ เนื้อเรื่อง touching มาก ถ้ามีคนเล่นด้วย นี่คือเกมที่ต้องเล่น",
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
