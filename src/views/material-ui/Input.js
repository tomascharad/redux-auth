import React from "react";
import * as Colors from "@material-ui/core/colors";
import {
  InputAdornment,
  FormHelperText,
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";
import { Error } from "@material-ui/icons";
import Immutable from "immutable";

class AuthInput extends React.Component {

  static defaultProps = {
    label: "",
    value: null,
    errors: Immutable.fromJS([])
  };

  handleInput(ev) {
    ev.preventDefault();
    this.props.onChange(ev.target.value);
  }

  renderErrorList() {
    let errors = null;

    if (this.props.errors.size) {
      errors = this.props.errors.map(error => (
        <FormHelperText id="email-sign-error">{error}</FormHelperText>
      ));
    }

    return errors;
  }

  render() {
    const {
      floatingLabelText,
      disabled,
      onChange,
      value,
      type
    } = this.props;

    let errorConfig = {
      startAdornment: {},
      error: {}
    }

    if (this.props.errors.size) {
      errorConfig = {
        icon: {
          startAdornment: (
            <InputAdornment position="start">
              <Error />
            </InputAdornment>
          )
        },
        error: {
          error: true
        }
      };
    }

    console.log(this.props.value)

    return (
      <FormControl {...errorConfig.error}>
        {/* <InputLabel htmlFor="email-sign">{floatingLabelText}</InputLabel> */}
        <Input
          id="email-sign"
          {...errorConfig.icon}
          onChange={onChange}
          disabled={disabled}
          fullWidth
          value={value}
          type={type}
        />
        {this.renderErrorList()}
      </FormControl >
    );
  }
}

export default AuthInput;
