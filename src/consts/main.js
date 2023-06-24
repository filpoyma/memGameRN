import React from 'react';
import { Dimensions } from 'react-native';

export const scrHeight = Dimensions.get('window').height;
export const scrWidth = Dimensions.get('window').width;

export const cards = [
  'bunny',
  'dolphin',
  'elephant',
  'rabbit',
  'cow',
  'bull',
  'bear',
  'tiger',
  'wolf',
  'moose',
  'pig',
  'shark',
  'skull',
  'owls',
  'ghosts',
  'cats',
  'birds',
  'unicorn'
];
export const backCard = 'treat';

export const game = {
  ready: 'ready',
  running: 'running',
  end: 'end',
  new: 'new'
};

export const delayFlipBackFirstCard = 5 * 1000;
export const delayToFlipBackPairs = 1 * 1000;
