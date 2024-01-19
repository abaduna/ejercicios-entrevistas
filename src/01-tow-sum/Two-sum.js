function thuwSum(aray, target) {
  for (let index = 0; index < aray.length; index++) {
    const complmento = target - aray[index];
    const indiceDelComplemento = aray.findIndex((e) => e === complmento);
    if (indiceDelComplemento !== -1) {
        return[index,indiceDelComplemento]
    }
  }
  return []
}

let aray = [1, 3, 7, 9, 2];
let target = 11;
console.log(thuwSum(aray, target))
module.exports = {thuwSum}