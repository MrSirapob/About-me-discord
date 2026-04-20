const playedGames = [
  {
    icon: "🐲",
    name: "Genshin Impact",
    desc: "เกมที่เสียเงินไปเยอะมาก gacha ร้ายมาก แต่ก็ยังเล่นอยู่หลายร้อยชั่วโมง world building สวยมาก เนื้อเรื่องลึกกว่าที่คิด แต่ patch updates บางทีก็ทำให้หัวร้อน",
  },
  {
    icon: "⚔️",
    name: "Elden Ring",
    desc: "Souls-like ที่ยากที่สุดที่เคยเล่น ตายนับไม่ถ้วน แต่ความรู้สึกตอนชนะ boss คือปลื้มมาก open world กว้างมากจนหลงทาง ขอบอกว่า FromSoftware เทพจริงๆ",
  },
  {
    icon: "🌎",
    name: "GTA V",
    desc: "เกม legend ที่เล่นซ้ำหลายรอบมาก online mode สนุกมากถ้ามีเพื่อนเล่นด้วย แต่ถ้าเล่นคนเดียวก็ยังสนุกได้ story ก็ดี ตัวละครน่ารัก",
  },
  {
    icon: "🎯",
    name: "CS2",
    desc: "เกมที่ train aim มาก ก่อนจะมาเล่น Valorant จริงๆ ก็เริ่มจาก CS ก่อน แผนที่ classic และ mechanics ที่ต้องฝึกเยอะมาก ยากกว่าที่คิดตอนแรก",
  },
  {
    icon: "🏰",
    name: "Minecraft",
    desc: "เกมแห่งวัยเด็ก เล่นมาตั้งแต่ version เก่าๆ ความ creative ที่ไม่มีขีดจำกัด ถ้าเบื่อโลกไหนก็สร้างโลกใหม่ survival mode ยังสนุกอยู่เสมอ",
  },
  {
    icon: "🔮",
    name: "League of Legends",
    desc: "MOBA ที่เล่นกับเพื่อนมาหลายปี ตอนนี้เลิกแล้วเพราะ toxic community แต่ช่วงที่เล่นนี่สนุกมาก ถ้าได้ทีมที่ดีคือเพลิดเพลิน",
  },
];

const recGames = [
  {
    icon: "🌸",
    name: "Hollow Knight",
    desc: "Indie Metroidvania ที่ดีที่สุดที่เคยเล่น art style สวยงาม เนื้อเรื่องลึกมากแม้ไม่มี dialogue เยอะ combat สนุก ราคาถูกแต่ content เยอะมากๆ ต้องลอง",
  },
  {
    icon: "🚀",
    name: "Hades",
    desc: "Roguelike ที่เล่นแล้วติดมากที่สุด ทุก run ไม่เหมือนกัน เนื้อเรื่อง progress แม้ตาย voice acting ดีมาก ถ้าชอบ action ต้องลองจริงๆ",
  },
  {
    icon: "🌿",
    name: "Stardew Valley",
    desc: "เกม chill ที่ดีที่สุดสำหรับวันที่เครียด farm สร้างความสัมพันธ์กับชาวบ้าน เวลาผ่านไปโดยไม่รู้ตัว เหมาะกับคนที่อยากพักจาก game competitive",
  },
  {
    icon: "🐺",
    name: "The Witcher 3",
    desc: "RPG ที่ดีที่สุดตลอดกาลในความคิดเห็นส่วนตัว เนื้อเรื่อง side quest ดีกว่า main quest บางเกม ตัว Geralt เป็น character ที่น่าสนใจมาก ไม่เล่นถือว่าพลาดมาก",
  },
  {
    icon: "🎭",
    name: "Disco Elysium",
    desc: "RPG ที่ไม่มี combat เลย แต่สนุกกว่าหลายเกมที่มี dialogue ลึกมาก ตัวเลือกสะท้อนความเป็นตัวเอง writing ดีที่สุดที่เคยเห็นในวิดีโอเกม",
  },
  {
    icon: "🎪",
    name: "It Takes Two",
    desc: "Co-op ที่ดีที่สุดสำหรับเล่นกับเพื่อนหรือคู่ ทุก chapter มี mechanic ใหม่ เนื้อเรื่อง touching มาก ถ้ามีคนเล่นด้วย นี่คือเกมที่ต้องเล่น",
  },
];

function buildGrid(games, containerId, type) {
  const grid = document.getElementById(containerId);
  games.forEach((g, i) => {
    const card = document.createElement("div");
    card.className = "game-icon-card";
    card.innerHTML = `<div class="icon">${g.icon}</div><div class="name">${g.name}</div>`;
    card.onclick = () => openModal(g, type);
    grid.appendChild(card);
  });
}

function openModal(game, type) {
  document.getElementById("modal-icon").textContent = game.icon;
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

buildGrid(playedGames, "played-grid", "played");
buildGrid(recGames, "rec-grid", "recommend");
