// game.spec.ts
import { TestBed } from '@angular/core/testing';
import { Game } from './game';

describe('Game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it('should create an instance', () => {
    expect(game).toBeTruthy();
  });
  /*
  test('all zero', () => {
    rollMany(20, 0);
    expect(game.score).toBe(0);
  });

  test('all one', () => {
    rollMany(20, 1);
    expect(game.score).toBe(20);
  });

  // game.spec.ts
  test('test on one spare', () => {
      game.roll(5);
      game.roll(5); // spare
      game.roll(3);
      rollMany(17, 0);
      expect(game.score).toBe(16);
  });

  // game.spec.ts
  test('test on one strike', () => {
      game.roll(10);
      game.roll(3);
      game.roll(4);
      rollMany(17, 0);
      expect(game.score).toBe(24);
  });

  // game.spec.ts
  test('perfect game', () => {
      rollMany(12, 10);
      expect(game.score).toBe(300);
  });

  function rollMany(n: number, pins: number) {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
  }
  */
  test('test on one different book', () => {
    game.buy(1,2);
    expect(game.price).toBe(200);
  });

  test('test on two classes book', () => {
    game.buy(2,3);
    expect(game.price).toBe(290);
  });
  
  test('test on three different books', () => {
    game.buy(3,4);
    expect(game.price).toBe(370);
  });

  test('test on four different books', () => {
    game.buy(4,5);
    expect(game.price).toBe(420);
  });
  test('test on five different books', () => {
    game.buy(5,6);
    expect(game.price).toBe(475);
  });
});
