/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/03/06 5:37 下午.
 */
import { AnyAction, Dispatch } from 'redux';
import { DemoState } from './demo';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    demo?: boolean;
  };
}


export interface ConnectState {
  demo: DemoState;
  loading: Loading;
}

export interface ConnectProps {
  dispatch: Dispatch<AnyAction>;
}
