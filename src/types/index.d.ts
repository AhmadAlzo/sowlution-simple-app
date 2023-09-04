import {NavigatorScreenParams,ParamListBase} from '@react-navigation/native';
import React from 'react';

export interface ErrorResponse {
  error: {message: string; status_code: number};
}

export type Item = {
  userId: number;
  id: React.Key;
  title: string;
  body: string;
};

export type StackParamList = ParamListBase & {
  LiquidScreen:undefined;
  Main:undefined;
};

export type TabParamList = {
  Home: undefined;
  contact: undefined;
  Not: undefined;
  Setting: undefined;
};
