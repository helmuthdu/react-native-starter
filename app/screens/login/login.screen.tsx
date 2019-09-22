import { Form, Icon, Input, Item, Toast } from 'native-base';
import React, { Component } from 'react';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { Field, reduxForm } from 'redux-form';
import Login from '../../components/login/login.component';

const required = (value?: string) => (value ? undefined : 'Required');
const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = (min: number) => (value: string) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const email = (value: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
const alphaNumeric = (value: string) =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined;

export interface Props {
  navigation: NavigationScreenProp<NavigationRoute>;
  valid: boolean;
}
class LoginForm extends Component<Props, {}> {
  public textInput: any;

  public renderInput({ input, meta: { touched, error } }: any) {
    return (
      <Item error={error && touched}>
        <Icon active name={input.name === 'email' ? 'person' : 'unlock'} />
        <Input
          ref={c => (this.textInput = c)}
          placeholder={input.name === 'email' ? 'Email' : 'Password'}
          secureTextEntry={input.name === 'password'}
          {...input}
        />
      </Item>
    );
  }

  public login() {
    if (this.props.valid) {
      this.props.navigation.navigate('Drawer');
    } else {
      Toast.show({
        text: 'Enter Valid Username & password!',
        duration: 2000,
        position: 'top',
        textStyle: { textAlign: 'center' }
      });
    }
  }

  public render() {
    const form = (
      <Form>
        <Field name="email" component={this.renderInput} validate={[email, required]} />
        <Field
          name="password"
          component={this.renderInput}
          validate={[alphaNumeric, minLength8, maxLength15, required]}
        />
      </Form>
    );
    return <Login loginForm={form} onLogin={() => this.login()} />;
  }
}

export default reduxForm({
  form: 'login'
  // @ts-ignore
})(LoginForm);
