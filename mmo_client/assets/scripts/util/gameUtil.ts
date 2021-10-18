import { cfg_all } from "../common/configUtil";


export function getItemImg(id: number, cb: (img: cc.SpriteFrame) => void) {
    cc.resources.load("itemImg/" + id, cc.SpriteFrame, (err, img: cc.SpriteFrame) => {
        if (err) {
            cb(null);
        } else {
            cb(img);
        }
    });
}
export enum E_itemT {
    gold = 0,               // 金币
    weapon = 1,             // 武器栏
    armor_physical = 2,    // 物抗栏
    armor_magic = 3,        // 魔抗栏
    hp_add = 4,     // 加血上限栏
    mp_add = 5,     // 加魔上限栏
    hp = 6,         // 快速加血栏
    mp = 7,         // 快速加蓝栏
}

let hintDic = {
    [E_itemT.weapon]: "攻击力：",
    [E_itemT.armor_physical]: "物抗：",
    [E_itemT.armor_magic]: "魔抗：",
    [E_itemT.hp_add]: "血量：",
    [E_itemT.mp_add]: "魔量：",
    [E_itemT.hp]: "快速回血：",
    [E_itemT.mp]: "快速回蓝：",
}

export function getItemHintInfo(id: number) {
    let cfg = cfg_all().item[id];
    let info = "<b>" + cfg.name + "</b>\n\n" + cfg.des + "\n\n<color=#DA4217>" + hintDic[cfg.type] + cfg.num + "</color>";
    return info;
}

