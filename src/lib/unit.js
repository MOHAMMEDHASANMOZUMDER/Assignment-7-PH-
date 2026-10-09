export const units = {
    kg: "কেজি",
    piece: "পিস",
    litre: "লিটার",
    dozen: "ডজন",
    packet: "প্যাকেট"
};

export function UnitBn(unit){
return units[unit.toLowerCase()] ?? unit;
}
