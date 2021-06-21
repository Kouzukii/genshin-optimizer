import characters from './index'
import Formula from '../../Formula'//load the formula processing
import { ICharacterSheet } from '../../Types/character'
import { CharacterKey } from '../../Types/consts'
expect.extend({
  toBeValidField(field, fieldStr) {
    if (field.formula && !field.formula.keys) return {
      message: () => `field ${fieldStr}.formula.keys is not valid. Should be added during formula processing.`,
      pass: false
    }
    if (field.formula && field.formula.field !== field) return {
      message: () => `field ${fieldStr}.formula.field is not valid. Should be added during formula processing, pointing to this field.`,
      pass: false
    }
    if (field.formula && !field.formulaText) return {
      message: () => `field ${fieldStr}.formula must be accompanies with a .formulaText.`,
      pass: false
    }
    return {
      message: () => `field ${fieldStr} is valid.`,
      pass: true
    }
  },
  toBeValidCharacterSheet(charSheet: ICharacterSheet, characterKey: CharacterKey) {
    if (charSheet.talent.formula !== (Formula.formulas as any).character[characterKey]) return {
      message: () => `Character sheet: ${characterKey}.formula is not being brought into Formula properly.`,
      pass: false
    }
    return {
      message: () => `Character sheet: ${characterKey} is valid.`,
      pass: true
    }
  }
})
test('validate character sheet', () => {
  Object.entries(characters).forEach(([characterKey, char]) => {
    expect(char).toBeValidCharacterSheet(characterKey)
    Object.entries(char.talent.sheets).forEach(([talentKey, talent]) =>
      talent.sections.forEach((section, sectionIndex) =>
        section.fields?.forEach?.((field, fieldIndex) => {
          expect(field).toBeValidField(`${characterKey}.${talentKey}.sections[${sectionIndex}].fields[${fieldIndex}]`)
        })))
  })
})

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidField(fieldStr): any
      toBeValidCharacterSheet(characterKey)
    }
  }
}
