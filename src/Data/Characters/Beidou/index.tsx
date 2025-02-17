import card from './Character_Beidou_Card.jpg'
import thumb from './Character_Beidou_Thumb.png'
import c1 from './Constellation_Sea_Beast\'s_Scourge.png'
import c2 from './Constellation_Upon_the_Turbulent_Sea,_the_Thunder_Arises.png'
import c3 from './Constellation_Summoner_of_Storm.png'
import c4 from './Constellation_Stunning_Revenge.png'
import c5 from './Constellation_Crimson_Tidewalker.png'
import c6 from './Constellation_Bane_of_the_Evil.png'
import normal from './Talent_Oceanborne.png'
import skill from './Talent_Tidecaller.png'
import burst from './Talent_Stormbreaker.png'
import passive1 from './Talent_Retribution.png'
import passive2 from './Talent_Lightning_Storm.png'
import passive3 from './Talent_Conqueror_of_Tides.png'
import DisplayPercent from '../../../Components/DisplayPercent'
import Stat from '../../../Stat'
import formula, { data } from './data'
import { getTalentStatKey, getTalentStatKeyVariant } from '../../../Build/Build'
import { IConditionals } from '../../../Types/IConditional'
import { ICharacterSheet } from '../../../Types/character'
const conditionals: IConditionals = {
  a4: { // Lightning Storm
    canShow: stats => stats.ascension >= 4,
    name: <span>Unleashing <b>Tidecaller</b> with its maximum DMG Bonus</span>,
    stats: {
      normal_dmg_: 15,
      charged_dmg_: 15,
      atkSPD_: 15,
    },
    fields: [{
      text: "Duration",
      value: "10s",
    }, {
      text: "Reduced delay before Charged Attacks",
    }]
  },
  c6: { // Bane Evil
    canShow: stats => stats.constellation >= 6,
    name: <span>During the duration of <b>Stormbreaker</b></span>,
    stats: { electro_enemyRes_: -15, }
  }
}
const char: ICharacterSheet = {
  name: "Beidou",
  cardImg: card,
  thumbImg: thumb,
  star: 4,
  elementKey: "electro",
  weaponTypeKey: "claymore",
  gender: "F",
  constellationName: "Victor Mare",
  titles: ["Uncrowned Lord of Ocean", "Queen of the Crux Fleet"],
  baseStat: data.baseStat,
  specializeStat: data.specializeStat,
  talent: {
    formula,
    conditionals,
    sheets: {
      auto: {
        name: "Oceanborne",
        img: normal,
        sections: [{
          text: <span><strong>Normal Attack</strong> Perform up to 5 successive strikes.</span>,
          fields: data.normal.hitArr.map((percentArr, i) =>
          ({
            text: `${i + 1}-Hit DMG`,
            formulaText: stats => <span>{percentArr[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("normal", stats), stats)}</span>,
            formula: formula.normal[i],
            variant: stats => getTalentStatKeyVariant("normal", stats),
          }))
        }, {
          text: <span><strong>Charged Attack</strong> Drains Stamina over time to perform continuous slashes. At end of the sequence, perform a more powerful slash.</span>,
          fields: [{
            text: `Spinning DMG`,
            formulaText: stats => <span>{data.charged.spinning[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("charged", stats), stats)}</span>,
            formula: formula.charged.spinning,
            variant: stats => getTalentStatKeyVariant("charged", stats),
          }, {
            text: `Spinning Final DMG`,
            formulaText: stats => <span>{data.charged.finalATK[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("charged", stats), stats)}</span>,
            formula: formula.charged.finalATK,
            variant: stats => getTalentStatKeyVariant("charged", stats),
          }, {
            text: `Stamina Cost`,
            value: `40/s`,
          }, {
            text: `Max Duration`,
            value: `5s`,
          }]
        }, {
          text: <span><strong>Plunging Attack</strong> Plunges from mid-air to strike the ground, damaging opponents along the path and dealing AoE DMG upon impact.</span>,
          fields: [{
            text: `Plunge DMG`,
            formulaText: stats => <span>{data.plunging.dmg[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("plunging", stats), stats)}</span>,
            formula: formula.plunging.dmg,
            variant: stats => getTalentStatKeyVariant("plunging", stats),
          }, {
            text: `Low Plunge DMG`,
            formulaText: stats => <span>{data.plunging.low[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("plunging", stats), stats)}</span>,
            formula: formula.plunging.low,
            variant: stats => getTalentStatKeyVariant("plunging", stats),
          }, {
            text: `High Plunge DMG`,
            formulaText: stats => <span>{data.plunging.high[stats.tlvl.auto]}% {Stat.printStat(getTalentStatKey("plunging", stats), stats)}</span>,
            formula: formula.plunging.high,
            variant: stats => getTalentStatKeyVariant("plunging", stats),
          }]
        }],
      },
      skill: {
        name: "Tidecaller",
        img: skill,
        sections: [{
          text: <span>
            <p className="mb-2">Nothing to worry about. Should anyone raise a hand against her or her men, she will avenge it ten-fold with sword and thunder.</p>
            <p className="mb-2"><strong>Press:</strong> Accumulating the power of lightning, Beidou swings her blade forward fiercely, dealing <span className="text-electro">Electro DMG</span>.</p>
            <p className="mb-2">
              <strong>Hold:</strong> Lifts her weapon up as a shield. Max DMG absorbed scales off Beidou's Max HP.
          Attacks using the energy stored within the greatsword upon release or once this ability's duration expires, dealing <span className="text-electro">Electro DMG</span>. DMG dealt scales with the number of times beidou is attacked in the skill's duration. The greatest DMG Bonus will be attained once this effect is triggered twice.
          The shield possesses the following properties:
          </p>
            <ul className="mb-1">
              <li>Has 250% <span className="text-electro">Electro DMG</span> Absorption Efficiency.</li>
              <li>Applies the <span className="text-electro">Electro element</span> to Beidou upon activation.</li>
            </ul>
            <p className="mb-2">
              Generate 2 elemental particles when it hit at least 1 target, or 4 when hit with energy stored.
          </p>
          </span>,
          fields: [{
            text: <span className="text-electro">Shield DMG Absorption</span>,
            formulaText: stats => <span>( {data.skill.hp[stats.tlvl.skill]}% {Stat.printStat("finalHP", stats)} + {data.skill.flat[stats.tlvl.skill]} ) * (100% + {Stat.printStat("powShield_", stats)}) * (250% <span className="text-electro">Electro Absorption</span>)</span>,
            formula: formula.skill.shieldElectro,
            variant: "electro"
          }, {
            text: "Shield DMG Absorption",
            formulaText: stats => <span>( {data.skill.hp[stats.tlvl.skill]}% {Stat.printStat("finalHP", stats)} + {data.skill.flat[stats.tlvl.skill]} ) * (100% + {Stat.printStat("powShield_", stats)})</span>,
            formula: formula.skill.shield,
          }, {
            text: "Base DMG",
            formulaText: stats => <span>{data.skill.dmg[stats.tlvl.skill]}% {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.dmg,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            text: "1-Hit Taken",
            formulaText: stats => <span>( {data.skill.dmg[stats.tlvl.skill]}% + {data.skill.onHit[stats.tlvl.skill]}% )  {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.hit1,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            text: "2-Hit Taken",
            formulaText: stats => <span>( {data.skill.dmg[stats.tlvl.skill]}% + 2 * {data.skill.onHit[stats.tlvl.skill]}% ) {Stat.printStat(getTalentStatKey("skill", stats), stats)}</span>,
            formula: formula.skill.hit2,
            variant: stats => getTalentStatKeyVariant("skill", stats),
          }, {
            text: "CD",
            value: "7.5s",
          }],
          conditional: conditionals.a4
        }],
      },
      burst: {
        name: "Stormbreaker",
        img: burst,
        sections: [{
          text: <span>
            <p>Recalling her slaying of the great beast Haishan, Beidou calls upon that monstrous strength and the lightning to create a Thunderbeast's Targe around herself, dealing <span className="text-electro">Electro DMG</span> to nearby enemies.</p>
            <h6>Thunderbeast's Targe:</h6>
            <ul className="mb-1">
              <li>When Normal and Charged Attacks hit, they create a lightning discharge that can jump between enemies, dealing <span className="text-electro">Electro DMG</span>.</li>
              <li>Increases the character's resistance to interruption, and decreases DMG taken.</li>
              <li>Triggers a maximum of 1 lightning discharge per second.</li>
            </ul>
          </span>,
          fields: [{
            text: "Skill DMG",
            formulaText: stats => <span>{data.burst.dmg[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
            formula: formula.burst.dmg,
            variant: stats => getTalentStatKeyVariant("burst", stats),
          }, {
            text: "Lightning DMG",
            formulaText: stats => <span>{data.burst.lightningDMG[stats.tlvl.burst]}% {Stat.printStat(getTalentStatKey("burst", stats), stats)}</span>,
            formula: formula.burst.lightningDMG,
            variant: stats => getTalentStatKeyVariant("burst", stats),
          }, {
            text: "DMG Reduction",
            value: stats => data.burst.dmgRed[stats.tlvl.burst] + "%",
          }, {
            text: "Duration",
            value: "15s",
          }, {
            text: "CD",
            value: "20s",
          }, {
            text: "Energy Cost",
            value: 80,
          }],
          conditional: conditionals.c6
        }],
      },
      passive1: {
        name: "Retribution",
        img: passive1,
        sections: [{ text: <span>Counterattacking with <b>Tidecaller</b> at the precise moment when the character is hit grants the maximum DMG Bonus.</span> }],
      },
      passive2: {
        name: "Lightning Storm",
        img: passive2,
        sections: [{
          text: <span>
            Gain the following effects for 10s after unleashing <b>Tidecaller</b> with its maximum DMG Bonus:
          <ul className="mb-0">
              <li>DMG dealt by Normal and Charged Attacks is increased by 15%. ATK SPD of Normal and Charged Attacks is increased by 15%.</li>
              <li>Greatly reduced delay before unleashing Charged Attacks.</li>
            </ul>
          </span>
        }],
      },
      passive3: {
        name: "Conqueror of Tides",
        img: passive3,
        sections: [{
          text: <span>
            Decreases swimming Stamina consumption of your characters in the party by 20%.
            Not stackable with Passive Talents that provide the exact same effects.
        </span>
        }],
      },
      constellation1: {
        name: "Sea Beast's Scourge",
        img: c1,
        sections: [{
          text: stats => <span>When <b>Stormbreaker</b> is used: Creates a shield that absorbs up to 16% of Beidou's Max HP{DisplayPercent(16, stats, "finalHP")} for 15s. This shield absorbs <span className="text-electro">Electro DMG</span> 250% more effectively.</span>,
          fields: [{
            canShow: stats => stats.constellation >= 1,
            text: <span className="text-electro">Shield DMG Absorption</span>,
            formulaText: stats => <span>16% {Stat.printStat("finalHP", stats)} * (100% + {Stat.printStat("powShield_", stats)}) * (250% <span className="text-electro">Electro Absorption</span>)</span>,
            formula: formula.constellation1.shieldElectro,
            variant: "electro"
          }, {
            canShow: stats => stats.constellation >= 1,
            text: "Shield DMG Absorption",
            formulaText: stats => <span>16% {Stat.printStat("finalHP", stats)} * (100% + {Stat.printStat("powShield_", stats)})</span>,
            formula: formula.constellation1.shield,
          },]
        }],
      },
      constellation2: {
        name: "Upon the Turbulent Sea, the Thunder Arises",
        img: c2,
        sections: [{ text: <span><b>Stormbreaker</b>'s arc lightning can jump to 2 additional targets.</span> }],
      },
      constellation3: {
        name: "Summoner of Storm",
        img: c3,
        sections: [{ text: <span>Increases the level of <b>Tidecaller</b> by 3. Maximum upgrade level is 15.</span> }],
        stats: { skillBoost: 3 }
      },
      constellation4: {
        name: "Stunning Revenge",
        img: c4,
        sections: [{
          text: <span>Within 10s of taking DMG, Beidou's Normal Attacks gain 20% additional <span className="text-electro">Electro DMG</span>.</span>,
          fields: [{
            text: "Electro DMG",
            formulaText: stats => <span>20% {Stat.printStat(getTalentStatKey("electro", stats), stats)}</span>,
            formula: formula.constellation4.dmg,
            variant: stats => getTalentStatKeyVariant("electro", stats),
          }]
        }],
      },
      constellation5: {
        name: "Crimson Tidewalker",
        img: c5,
        sections: [{ text: <span>Increases the level of <b>Stormbreaker</b> by 3. Maximum upgrade level is 15.</span> }],
        stats: { burstBoost: 3 }
      },
      constellation6: {
        name: "Bane of the Evil",
        img: c6,
        sections: [{ text: <span>During the duration of <b>Stormbreaker</b>, the <span className="text-electro">Electro RES</span> of surrounding enemies is decreased by 15%.</span> }],
      },
    },
  },
};
export default char;
