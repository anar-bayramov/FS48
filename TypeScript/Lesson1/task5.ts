function ortaBal(ballar: number[]): number {
  let cem = 0;
  for (let bal of ballar) {
    cem += bal;
  }
  return cem / ballar.length

}

function qiymetlendir(bal: number): string {
  if (bal >= 90) {
    return "Ela";
  } else if (bal >= 70) {
    return "Yaxsi";
  } else if (bal >= 50) {
    return "Kafi";
  } else {
    return "Qeyri-kafi";
  }
}

function neticeniGoster(ad: string, ballar: number[]): void {
  let orta = ortaBal(ballar);
  let qiymet = qiymetlendir(orta);

  console.log(ad + ": orta bal " + orta.toFixed(2) + ", qiymət: " + qiymet);
}

neticeniGoster("Anar", [90, 85, 100]);
neticeniGoster("Murad", [70, 80, 75]);
neticeniGoster("Ceyhun", [40, 50, 45]);
