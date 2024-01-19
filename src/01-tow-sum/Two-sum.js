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

function optimazedTwoSum(aray,target){
    const map = new Map()
    for (let i = 0; i < aray.length; i++) {
        const complemmto = target - aray[i]
        map.set(complemmto,i)
        const mapProperty = map.get(aray[i]) ?? null
        if (mapProperty) {
            return [mapProperty,i]
        }

        
    }
    return []
}
optimazedTwoSum(aray,target)
module.exports = {thuwSum}