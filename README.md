<p align="center">
  <img src="assets/bootsplash/logo@3x.png" alt="MemGame logo" width="160" />
</p>

<h1 align="center">MemGame</h1>

<p align="center">
  <strong>Мобильная игра «Память» в тематике Trick or Treat</strong><br />
  Найди все пары карточек с животными — быстрее и с меньшим числом ошибок!
</p>

<p align="center">
  <img src="src/img/trickortreat.png" alt="Trick or Treat" width="320" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-0.79-61DAFB?logo=react&logoColor=white" alt="React Native" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Platform-iOS%20%7C%20Android-lightgrey" alt="Platform" />
</p>

---

## О игре

**MemGame** — классическая игра на память для iOS и Android. На поле 36 карточек (18 пар) с забавными иконками животных и Halloween-элементами. Переворачивай карты, запоминай расположение и собирай пары.

| | |
|---|---|
| **Поле** | 6 × 6 карточек |
| **Пары** | 18 уникальных изображений |
| **Старт** | Нажми любую карту |
| **Таймер** | Отсчёт времени с первого хода |
| **Перезапуск** | Кнопка **NEW GAME** |

### Как играть

1. Нажми любую карту — игра начнётся, запустится таймер.
2. Первая открытая карта остаётся видимой **5 секунд**, затем переворачивается обратно.
3. Открой вторую карту — если пара совпала, карты остаются открытыми.
4. Если не совпала — через **1 секунду** обе карты закроются.
5. Собери все 18 пар — на экране появится итоговое время.

---

## Превью

> В репозитории нет скриншотов симулятора, поэтому ниже — визуальные материалы из самого приложения: иконка, заставка и карточки.

<p align="center">
  <img src="android/app/src/main/play_store_512.png" alt="Иконка приложения" width="140" />
  &nbsp;&nbsp;&nbsp;
  <img src="assets/treat-icon.png" alt="Рубашка карты" width="140" />
</p>

<p align="center">
  <em>Слева — иконка приложения · Справа — рубашка карты (Treat)</em>
</p>

### Карточки в игре

<table align="center">
  <tr>
    <td align="center"><img src="src/img/bunny-icon.svg" width="64" alt="Bunny" /><br /><sub>Bunny</sub></td>
    <td align="center"><img src="src/img/cow-icon.svg" width="64" alt="Cow" /><br /><sub>Cow</sub></td>
    <td align="center"><img src="src/img/tiger-icon.svg" width="64" alt="Tiger" /><br /><sub>Tiger</sub></td>
    <td align="center"><img src="src/img/unicorn-icon.svg" width="64" alt="Unicorn" /><br /><sub>Unicorn</sub></td>
    <td align="center"><img src="src/img/ghosts-icon.svg" width="64" alt="Ghosts" /><br /><sub>Ghosts</sub></td>
    <td align="center"><img src="src/img/skull-icon.svg" width="64" alt="Skull" /><br /><sub>Skull</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="src/img/dolphin-icon.svg" width="64" alt="Dolphin" /><br /><sub>Dolphin</sub></td>
    <td align="center"><img src="src/img/elephant-icon.svg" width="64" alt="Elephant" /><br /><sub>Elephant</sub></td>
    <td align="center"><img src="src/img/bear-icon.svg" width="64" alt="Bear" /><br /><sub>Bear</sub></td>
    <td align="center"><img src="src/img/shark-icon.svg" width="64" alt="Shark" /><br /><sub>Shark</sub></td>
    <td align="center"><img src="src/img/owls-icon.svg" width="64" alt="Owls" /><br /><sub>Owls</sub></td>
    <td align="center"><img src="src/img/cats-icon.svg" width="64" alt="Cats" /><br /><sub>Cats</sub></td>
  </tr>
</table>

<p align="center">
  <em>И ещё 6 пар: rabbit, bull, wolf, moose, pig, birds</em>
</p>

---

## Стек технологий

| Категория | Библиотеки |
|-----------|------------|
| UI | React Native, styled-components |
| Анимации | react-native-flip-card |
| Графика | react-native-svg |
| Запуск | react-native-bootsplash |
| Язык | TypeScript |

---

## Быстрый старт

### Требования

- Node.js ≥ 18
- [Настроенное окружение React Native](https://reactnative.dev/docs/set-up-your-environment)
- Xcode (iOS) / Android Studio (Android)

### Установка

```sh
npm install
```

### iOS — CocoaPods (первый запуск)

```sh
bundle install
bundle exec pod install --project-directory=ios
```

### Запуск

```sh
# Metro
npm start

# Android
npm run android

# iOS
npm run ios
```

### Сборка релиза (Android)

```sh
npm run android:apk   # APK
npm run android:aab   # AAB для Google Play
```

---

## Структура проекта

```
memorygame/
├── App.tsx                 # Точка входа
├── src/
│   ├── components/         # Card, Timer, Button, Icon…
│   ├── containers/         # Game, Board
│   ├── consts/             # Константы игры
│   ├── functs/             # Логика доски и перемешивания
│   ├── hooks/              # Таймер
│   ├── img/                # SVG-иконки карточек
│   └── styles/             # styled-components
├── android/
├── ios/
└── assets/                 # Boot splash, иконки
```

---




