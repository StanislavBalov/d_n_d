import { createCard } from './board';

test('создание карточки', () => {
  const card = createCard('Задача 1');
  expect(card.textContent).toBe('Задача 1');
});
