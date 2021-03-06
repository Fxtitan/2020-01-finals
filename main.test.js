const {
  makeRunOn,
  stringOut,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
} = require('./main.js')


describe('makeRunOn', () => {
  it(`replaces periods with commas to make the given string a run-on sentence`, () => {
    const original1 = 'Run-ons are the best. Why would you pause. When you can just. Keep. GOING';
    const runOn1 = 'Run-ons are the best, Why would you pause, When you can just, Keep, GOING';
    const original2 = 'See spot run. See spot run on and on and on and';
    const runOn2 = 'See spot run, See spot run on and on and on and';
    
    expect(makeRunOn(original1)).toBe(runOn1)
    expect(makeRunOn(original2)).toBe(runOn2)
  })

  it(`keeps the string as a sentence--does NOT remove the last period.`, () => {
    const original1 = `And once the storm is over you won't remember how you made it through, how you managed to survive. You won't even be sure, in fact, whether the storm is really over. But one thing is certain. When you come out of the storm you won't be the same person who walked in. That's what this storm's all about.`;
    const runOn1 = `And once the storm is over you won't remember how you made it through, how you managed to survive, You won't even be sure, in fact, whether the storm is really over, But one thing is certain, When you come out of the storm you won't be the same person who walked in, That's what this storm's all about.`;

    const original2 = 'The Ministry of Truth, which concerned itself with news, entertainment, education and the fine arts. The Ministry of Peace, which concerned itself with war. The Ministry of Love, which maintained law and order. And the Ministry of Plenty, which was responsible for economic affairs. Their names, in Newspeak: Minitrue, Minipax, Miniluv and Miniplenty.'
    const runOn2 = 'The Ministry of Truth, which concerned itself with news, entertainment, education and the fine arts, The Ministry of Peace, which concerned itself with war, The Ministry of Love, which maintained law and order, And the Ministry of Plenty, which was responsible for economic affairs, Their names, in Newspeak: Minitrue, Minipax, Miniluv and Miniplenty.'
    expect(makeRunOn(original1)).toBe(runOn1)
    expect(makeRunOn(original2)).toBe(runOn2)
  })
})

describe('stringOut', () => {
  it(`puts a space between all characters in a letter-only string`, () => {
    expect(stringOut('hello')).toBe('h e l l o')
  })

  it(`does not put a space after a space`, () => {
    expect(stringOut('hello there')).toBe('h e l l o t h e r e')
  })
})

describe('nightOwls', () => {
  it(`returns all people who are awake between 1am and 4am`, () => {
    const people = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 130,
        asleep: false
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 330,
        asleep: false
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    const shouldBeAsleep = [
      {
        name: 'Alice',
        localTime: 130,
        asleep: false
      },
      {
        name: 'William',
        localTime: 330,
        asleep: false
      },
    ]

    expect(nightOwls(people)).toEqual(shouldBeAsleep);
  })

  it(`is inclusive`, () => {
    const people = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 100,
        asleep: false
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 400,
        asleep: false
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    const shouldBeAsleep = [
      {
        name: 'Alice',
        localTime: 100,
        asleep: false
      },
      {
        name: 'William',
        localTime: 400,
        asleep: false
      },
    ]

    expect(nightOwls(people)).toEqual(shouldBeAsleep);
  })

  it(`doesn't mutate the original array`, () => {
    const originalPeople = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 100,
        asleep: false
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 400,
        asleep: false
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    const people = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 100,
        asleep: false
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 400,
        asleep: false
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    nightOwls(people);
    expect(people).toEqual(originalPeople);
  })
});

describe('totalScore', () => {
  it(`adds all scores together when the multiplier is 1`, () => {
    const levels1 = [
      {
        score: 50,
        multiplier: 1,
      },
      {
        score: 200,
        multiplier: 1,
      },
      {
        score: 400,
        multiplier: 1,
      },
      {
        score: 350,
        multiplier: 1,
      },
    ]

    const levels2 = [
      {
        score: 55,
        multiplier: 1,
      },
      {
        score: 215,
        multiplier: 1,
      },
      {
        score: 430,
        multiplier: 1,
      },
      {
        score: 330,
        multiplier: 1,
      },
    ]

    expect(totalScore(levels1)).toBe(1000)
    expect(totalScore(levels2)).toBe(1030)
  })

  it(`multiplies by multiplier before adding`, () => {
    const levels1 = [
      {
        score: 50,
        multiplier: 2,
      },
      {
        score: 200,
        multiplier: 1,
      },
      {
        score: 400,
        multiplier: 3,
      },
      {
        score: 350,
        multiplier: 3,
      },
    ]

    const levels2 = [
      {
        score: 55,
        multiplier: 3,
      },
      {
        score: 215,
        multiplier: 10,
      },
      {
        score: 430,
        multiplier: 3,
      },
      {
        score: 330,
        multiplier: 2,
      },
    ]

    expect(totalScore(levels1)).toBe(2550)
    expect(totalScore(levels2)).toBe(4265)
  })

  it(`treats an unspecified multiplier as a multiplier of 1`, () => {
    const levels1 = [
      {
        score: 70,
      },
      {
        score: 230,
      },
      {
        score: 450,
      },
      {
        score: 450,
      },
    ]

    const levels2 = [
      {
        score: 45,
      },
      {
        score: 205,
      },
      {
        score: 330,
      },
      {
        score: 230,
      },
    ]

    expect(totalScore(levels1)).toBe(1200)
    expect(totalScore(levels2)).toBe(810)
  })
})

describe('getToBed', () => {
  it(`returns the original people but with everyone awake between 1am and 4am set to asleep`, () => {
    const people = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 130,
        asleep: false
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 330,
        asleep: false
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    const asleep = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 130,
        asleep: true
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 330,
        asleep: true
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    expect(getToBed(people)).toEqual(asleep)
  })

  it(`is inclusive`, () => {
    const people = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 100,
        asleep: false
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 400,
        asleep: false
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    const asleep = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 100,
        asleep: true
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 400,
        asleep: true
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    expect(getToBed(people)).toEqual(asleep);
  })

  it(`doesn't mutate the original array`, () => {
    const originalPeople = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 100,
        asleep: false
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 400,
        asleep: false
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    const people = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 100,
        asleep: false
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 400,
        asleep: false
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    getToBed(people);
    expect(people).toEqual(originalPeople);
  })
});

describe('findIndices', () => {
  it(`given an array and a callback, returns the indices of every element that the callback returns true for`, () => {
    const isOdd = (num) => num % 2 === 1;
    const isEven = (num) => num % 2 === 0;
    const isColin = (name) => name === 'Colin';

    const nums = [3, 5, 2, 4, 16, 5];
    const people = ['Colin', 'Colin', 'Messi', 'Colin', 'boy there are a lot of Colins'];

    expect(findIndices(nums, isOdd)).toEqual([0, 1, 5]);
    expect(findIndices(nums, isEven)).toEqual([2, 3, 4]);
    expect(findIndices(people, isColin)).toEqual([0, 1, 3]);
  })
});

describe('Faqtory', () => {
  it(`returns an object`, () => {
    const faqtory = Faqtory()
    expect(typeof faqtory).toBe('object')
  })

  it(`begins with a questions property set to an empty array`, () => {
    const faqtory = Faqtory()
    expect(Array.isArray(faqtory.questions)).toBe(true);
    expect(faqtory.questions.length).toBe(0)
  })
});

describe('Faqtory.addQuestion', () => {
  it(`adds a question object with the correct text to the questions array`, () => {
    const faqtory = Faqtory();
    const question1 = 'What is your site all about?';
    const question2 = 'How can I help?';
    const question3 = 'What is your site all about?';

    faqtory.addQuestion(question1);
    faqtory.addQuestion(question2);
    faqtory.addQuestion(question3);
    expect(faqtory.questions[0].text).toBe(question1);
    expect(faqtory.questions[1].text).toBe(question2);
    expect(faqtory.questions[2].text).toBe(question3);
  })

  it(`gives the question object a default status of unanswered`, () => {
    const faqtory = Faqtory();
    const question1 = 'What is your site all about?';
    const question2 = 'How can I help?';
    const question3 = 'What is your site all about?';

    faqtory.addQuestion(question1);
    faqtory.addQuestion(question2);
    faqtory.addQuestion(question3);
    expect(faqtory.questions[0].answered).toBe(false);
    expect(faqtory.questions[1].answered).toBe(false);
    expect(faqtory.questions[2].answered).toBe(false);
  })

  it(`gives the added questions 0-based ids`, () => {
    const faqtory = Faqtory();
    const question1 = 'What is your site all about?';
    const question2 = 'How can I help?';
    const question3 = 'What is your site all about?';
    faqtory.addQuestion('What is your site all about?');
    faqtory.addQuestion('How can I help?');
    faqtory.addQuestion('Why did you start this site?');
    expect(faqtory.questions[0].id).toBe(0);
    expect(faqtory.questions[1].id).toBe(1);
    expect(faqtory.questions[2].id).toBe(2);
  })
});

describe('Faqtory.answerQuestion', () => {
  it(`adds the given text as an answer to the question with the given id`, () => {
    const faqtory = Faqtory();
    faqtory.questions = [
      {
        id: 0,
        answered: false,
      },
      {
        id: 1,
        answered: false,
      },
    ]

    faqtory.answerQuestion(0, `It's about MAKING MONEY for yourself.`);
    faqtory.answerQuestion(1, `To MAKE MONEY for ourselves.`);

    expect(faqtory.questions[0].answer).toBe(`It's about MAKING MONEY for yourself.`)
    expect(faqtory.questions[1].answer).toBe(`To MAKE MONEY for ourselves.`)
  })

  it(`does not answer already-answered questions`, () => {
    const faqtory = Faqtory();
    faqtory.questions = [
      {
        answer: `It's about MAKING MONEY for yourself.`,
        answered: true,
        id: 0
      },
      {
        answer: `To MAKE MONEY for ourselves.`,
        answered: true,
        id: 1
      },
    ]

    faqtory.answerQuestion(0, `answered again?`);
    faqtory.answerQuestion(1, `don't answer again`);

    expect(faqtory.questions[0].answer).toBe(`It's about MAKING MONEY for yourself.`)
    expect(faqtory.questions[1].answer).toBe(`To MAKE MONEY for ourselves.`)
  })
});
