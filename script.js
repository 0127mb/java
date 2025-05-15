const a = 100;
  const b = [];

  // 3 ta tasodifiy yirik son (100 dan katta) qo‘shamiz
  for (let i = 0; i < 3; i++) {
    let randomSon = Math.floor(Math.random() * 900) + 101; // 101 dan 1000 gacha
    b.push(randomSon);
  }

  // Random sonlarni ko‘rsatamiz
  alert("b massivining sonlari: " + b.join(", "));

  // Har bir b dagi sonni a bilan solishtiramiz
  b.forEach((son, index) => {
    if (son > a) {
      alert(`b[${index}] = ${son} => a (${a}) dan KATTA`);
    } else if (son < a) {
      alert(`b[${index}] = ${son} => a (${a}) dan KICHIK`);
    } else {
      alert(`b[${index}] = ${son} => a (${a}) ga TENG`);
    }
  });
