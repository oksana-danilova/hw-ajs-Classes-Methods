import Character from '../character';

test('should levelUp the defence', () => {
  const character = new Character('Player', 'Magician');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.health).toBe(100);
  expect(character.attack).toBe(12);
  expect(character.defence).toBe(12);
  expect(character.level).toBe(2);

  character.damage(1000)
  expect(function() {
    character.levelUp()
  }).toThrow(new Error("Can't raise the level of the deceased"));
});

test('should points damage the health', () => {
  const character = new Character('Player', 'Magician');
  character.defence = 10;
  character.damage(50);
  expect(character.health).toBe(55);

  character.damage(1000)
  expect(function() {
    character.damage()
  }).toThrow(new Error("Can't damage the deceased"));
});

test('checking the length of the name', () => {
  expect(() => new Character('a', 'Bowman')).toThrow(new Error('Name is short or long'));
});

test('type checking', () => {
  expect(() => new Character('Player', 'Hero')).toThrow(new Error('Wrong type'));
});