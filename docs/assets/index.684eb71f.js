var e = Object.defineProperty,
  r = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  t = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  c = (r, a, s) =>
    a in r
      ? e(r, a, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (r[a] = s),
  o = (e, r) => {
    for (var a in r || (r = {})) t.call(r, a) && c(e, a, r[a])
    if (s) for (var a of s(r)) n.call(r, a) && c(e, a, r[a])
    return e
  },
  i = (e, s) => r(e, a(s)),
  d = (e, r) => {
    var a = {}
    for (var c in e) t.call(e, c) && r.indexOf(c) < 0 && (a[c] = e[c])
    if (null != e && s)
      for (var c of s(e)) r.indexOf(c) < 0 && n.call(e, c) && (a[c] = e[c])
    return a
  }
import {
  c as l,
  j as u,
  u as _,
  a as m,
  b as p,
  r as h,
  d as g,
  e as v,
  R as y,
  f,
  P as b
} from './vendor.0a59aa45.js'
var C = {
  base: '_base_rvsh7_1',
  gradient: '_gradient_rvsh7_1',
  foodanddrink: '_foodanddrink_rvsh7_23',
  geography: '_geography_rvsh7_29',
  generalknowledge: '_generalknowledge_rvsh7_35',
  history: '_history_rvsh7_41',
  artandliterature: '_artandliterature_rvsh7_47',
  movies: '_movies_rvsh7_53',
  music: '_music_rvsh7_59',
  science: '_science_rvsh7_65',
  societyandculture: '_societyandculture_rvsh7_71',
  sportandleisure: '_sportandleisure_rvsh7_77'
}
var w = {
  base: '_base_uyr7x_1',
  appear: '_appear_uyr7x_1',
  questions: '_questions_uyr7x_17',
  categories: '_categories_uyr7x_23',
  selected: '_selected_uyr7x_31',
  play: '_play_uyr7x_35',
  forbidden: '_forbidden_uyr7x_40'
}
function q(e, r) {
  return r.map((r) => (r ? e[r] : '')).join(' ')
}
const N = l({
    name: 'app',
    initialState: { mode: 'initial', selectedCategories: [], questions: 5, startTime: 0 },
    reducers: {
      addCategory: (e, r) => {
        e.selectedCategories.push(r.payload)
      },
      removeCategory: (e, r) => {
        const a = e.selectedCategories.indexOf(r.payload)
        e.selectedCategories.splice(a, 1)
      },
      setQuestions: (e, r) => {
        e.questions = r.payload
      },
      startGame: (e) => {
        ;(e.mode = 'game'), (e.startTime = performance.now())
      },
      endGame: (e) => {
        e.mode = 'score'
      },
      restart: (e) => {
        e.mode = 'initial'
      }
    }
  }),
  {
    addCategory: x,
    removeCategory: S,
    setQuestions: k,
    startGame: O,
    endGame: j,
    restart: z
  } = N.actions
var A = N.reducer
const G = [
  'Food and Drink',
  'Geography',
  'General knowledge',
  'History',
  'Art and Literature',
  'Movies',
  'Music',
  'Science',
  'Society and Culture',
  'Sport and Leisure'
]
var P = '_base_1wcea_1'
function $(e) {
  var r = e,
    { children: a, className: s } = r,
    t = d(r, ['children', 'className'])
  return u('div', i(o({ className: `${P} ${s}` }, t), { children: a }))
}
var M = { base: '_base_cokn2_1', primary: '_primary_cokn2_21' }
function Q(e) {
  var r = e,
    { children: a, className: s, primary: t } = r,
    n = d(r, ['children', 'className', 'primary'])
  const c = `${s} ${q(M, ['base', t && 'primary'])}`
  return u('button', i(o({ className: c }, n), { children: a }))
}
function T() {
  const { selectedCategories: e, questions: r } = _(({ app: e }) => e),
    a = m(),
    s = G.map((r) => ({ name: r, selected: e.includes(r) })),
    t = (e) => {
      a(x(e.target.value))
    },
    n = (e) => {
      a(S(e.target.value))
    },
    c = q(w, ['play', (0 === e.length || r < 5 || r > 20) && 'forbidden'])
  return u('form', {
    onSubmit: (r) => {
      r.preventDefault(), e.length && a(O())
    },
    children: p($, {
      className: w.base,
      children: [
        p('div', {
          children: [
            u('h2', { children: 'Welcome to Quiz Game' }),
            u('p', { children: 'Please fill the next options' })
          ]
        }),
        p('div', {
          className: w.questions,
          children: [
            u('h3', { children: 'Questions' }),
            u('input', {
              type: 'number',
              name: 'number',
              value: r,
              onChange: (e) => {
                a(k(e.target.value))
              },
              min: 5,
              max: 20
            })
          ]
        }),
        u('h3', { children: 'Categories' }),
        u('div', {
          className: w.categories,
          children: s.map(({ name: e, selected: r }) =>
            p(
              Q,
              {
                className: r ? w.selected : '',
                type: 'button',
                value: e,
                onClick: r ? n : t,
                children: [e, ' ', r ? '???' : ' +']
              },
              e
            )
          )
        }),
        u('div', {
          className: c,
          children: u(Q, { primary: !0, children: 'Start Game' })
        })
      ]
    })
  })
}
var L = {}
var D = {
  base: '_base_1q16q_1',
  appear: '_appear_1q16q_1',
  question: '_question_1q16q_7',
  answers: '_answers_1q16q_13',
  done: '_done_1q16q_21',
  disappear: '_disappear_1q16q_1'
}
var F = { base: '_base_1d00i_1', correct: '_correct_1d00i_8', wrong: '_wrong_1d00i_12' }
function E({ label: e, correct: r, selected: a, done: s, onClick: t }) {
  const n = q(F, ['base', s && (r ? 'correct' : a && 'wrong')])
  return u(Q, { className: n, onClick: t, children: e })
}
const R = l({
    name: 'game',
    initialState: { cards: [], currentCard: {}, lastCard: !1, results: [] },
    reducers: {
      setCards: (e, r) => {
        ;(e.cards = r.payload),
          (e.currentCard = e.cards[0]),
          (e.lastCard = !1),
          (e.results = [])
      },
      answerCard: (e, r) => {
        const a = {
          card: e.currentCard,
          answer: r.payload,
          correct: r.payload === e.currentCard.correctAnswer
        }
        if ((e.results.push(a), e.lastCard)) return
        const s = e.currentCard.index,
          t = e.cards[s + 1]
        ;(e.currentCard = t), s === e.cards.length - 2 && (e.lastCard = !0)
      }
    }
  }),
  { setCards: H, answerCard: I } = R.actions
var W = R.reducer
function Y({ question: e, answers: r = [], correctAnswer: a, category: s }) {
  const [t, n] = h.exports.useState(!1),
    [c, o] = h.exports.useState(),
    { lastCard: i } = _(({ game: e }) => e),
    d = m(),
    l = q(D, ['base', t && 'done'])
  return p($, {
    className: l,
    children: [
      u('small', { children: s }),
      u('div', { className: D.question, children: u('h3', { children: e }) }),
      u('div', {
        className: D.answers,
        children: r.map((e, r) =>
          u(
            E,
            {
              label: e,
              correct: a === e,
              selected: c === e,
              done: t,
              onClick: () =>
                ((e) => {
                  t ||
                    (n(!0),
                    o(e),
                    setTimeout(() => {
                      d(I(e)), n(!1), i && d(j())
                    }, 2e3))
                })(e)
            },
            r
          )
        )
      })
    ]
  })
}
function B() {
  const [e, r] = h.exports.useState(!1),
    {
      app: { selectedCategories: a, questions: s },
      game: { currentCard: t }
    } = _((e) => e),
    n = m()
  return (
    h.exports.useEffect(() => {
      const e = `https://the-trivia-api.com/questions?categories=${a
        .join(',')
        .replaceAll(' ', '_')
        .toLowerCase()}&limit=${s}`
      g.get(e)
        .then(({ data: e }) => {
          const a = e.map(
            ({ question: e, correctAnswer: r, incorrectAnswers: a, category: s }, t) => {
              a.length > 3 && a.splice(3)
              const n = [r, ...a]
              return (
                (function (e) {
                  for (let r = e.length - 1; r > 0; r--) {
                    const a = Math.floor(Math.random() * (r + 1)),
                      s = e[r]
                    ;(e[r] = e[a]), (e[a] = s)
                  }
                })(n),
                { index: t, question: e, answers: n, correctAnswer: r, category: s }
              )
            }
          )
          n(H(a)), r(!0)
        })
        .catch(console.log)
    }, []),
    { ready: e, currentCard: t }
  )
}
function J() {
  const { ready: e, currentCard: r } = B()
  return u('div', { className: L.base, children: e && u(Y, o({}, r)) })
}
var K = {
  base: '_base_fz0d2_1',
  appear: '_appear_fz0d2_1',
  results: '_results_fz0d2_16',
  restart: '_restart_fz0d2_31',
  result: '_result_fz0d2_16',
  answer: '_answer_fz0d2_35',
  correct: '_correct_fz0d2_39'
}
function U() {
  const e = m(),
    {
      app: { questions: r, startTime: a },
      game: { results: s }
    } = _((e) => e),
    t = s.filter(({ correct: e }) => e).length,
    n = (performance.now() - a) / 1e3
  let c = (t / s.length) * (10 * s.length - n)
  c = c >= 0 ? c : t / s.length
  return p($, {
    className: K.base,
    children: [
      p('h1', { children: ['Score: ', c.toFixed(1)] }),
      p('h3', { children: ['Correct answers: ', t, '/', r] }),
      p('h3', { children: ['Time elapsed: ', n.toFixed(1), 's'] }),
      u('div', {
        className: K.results,
        children: s.map(({ correct: e, answer: r, card: a }, s) =>
          u(V, o({ number: s + 1, correct: e, answer: r }, a), s)
        )
      }),
      u('div', {
        className: K.restart,
        children: u(Q, {
          primary: !0,
          onClick: () => {
            e(z())
          },
          children: 'Restart'
        })
      })
    ]
  })
}
function V({ question: e, number: r, answer: a, correctAnswer: s, correct: t }) {
  const n = q(K, ['result', t && 'correct'])
  return p('div', {
    className: n,
    children: [
      p('div', { children: [p('b', { children: ['Question ', r, ':'] }), ' ', e] }),
      p('div', {
        className: K.answer,
        children: [u('b', { children: 'Your answer:' }), ' ', u('span', { children: a })]
      }),
      !t && p('div', { children: [u('b', { children: 'Correct answer:' }), ' ', s] })
    ]
  })
}
const X = { initial: u(T, {}), game: u(J, {}), score: u(U, {}) }
function Z() {
  const { mode: e, currentCard: r } = _(
      ({ app: { mode: e }, game: { currentCard: r } }) => ({ mode: e, currentCard: r })
    ),
    a = q(C, ['base', r.category && r.category.replace(/\s/g, '').toLowerCase()])
  return u('div', { className: a, children: X[e] })
}
const ee = v({ reducer: { app: A, game: W } })
y.render(
  u(f.StrictMode, { children: u(b, { store: ee, children: u(Z, {}) }) }),
  document.querySelector('main')
)
