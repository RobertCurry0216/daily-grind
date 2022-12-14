function main() {
  const params = new URLSearchParams(document.location.search);
  const diff_names = ["Mocha", "Cappuccino", "Latte", "Macchiato", "Espresso"];

  //title
  const year = params.get("y") || "N/A";
  const month = params.get("m") || 0;
  const day = params.get("d") || 0;
  const title_text = `Daily Grind - ${year}-${month}-${day}`;

  // score
  const score = params.get("s") || "N/A";
  const diff = params.get("c") ? diff_names[params.get("c")] : "N/A";
  const score_text = `${diff} : ${score}`;

  // attempts
  let grade_text = "";
  const attempts = params.get("a") || 999;

  if (attempts > 10) {
    grade_text = `${attempts}❌ ☕`;
  } else if (attempts === 1) {
    grade_text = "☕";
  } else {
    for (let i = 1; i < attempts; i++) {
      grade_text = `${grade_text}❌`;
    }
    grade_text = `${grade_text} ☕`;
  }

  document.getElementById("title").innerHTML = title_text;
  document.getElementById("score").innerHTML = score_text;
  document.getElementById("grade").innerHTML = grade_text;

  // copy button
  const copy = () => {
    navigator.clipboard.writeText(
      `A Balanced Brew\n${title_text}\n${score_text}\n${grade_text}`
    );
    document.getElementById("btn_copy").innerHTML = "Copied!";
  };
  document.getElementById("btn_copy").onclick = copy;
}

main();
