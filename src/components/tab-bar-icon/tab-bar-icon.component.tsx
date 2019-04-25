import React from 'react';
import { Icon } from 'expo';
import Colors from '../../constants/colors.constant';

type Props = {
  name: string;
  focused: boolean;
};

export const TabBarIcon = (props: Props) => (
  <Icon.Ionicons
    name={props.name}
    size={26}
    style={{ marginBottom: -3 }}
    color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);