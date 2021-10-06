import type { IPersonInformation } from '../../interfaces/interface/person';

const DYNAMIC_PARAMETER = 'name';
export const INITIAL_PUSHKIN: string = 'Alexander Sergeevich Pushkin';

// Масим со всеми личностями
export const arrayPersons: Array<IPersonInformation> = [
  {
    // Инициалы
    initial: INITIAL_PUSHKIN,
    // Информация
    infarmation: `Меня зовут: ${INITIAL_PUSHKIN}`,
  },
];

export const arrayPathsRouting = arrayPersons.map((person) => {
  return {
    params: {
      [`${DYNAMIC_PARAMETER}`]: person.initial,
    },
  };
});
