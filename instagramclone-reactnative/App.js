import React, {Component} from 'react';
import { Text, View, ImageBackground, StatusBar, ScrollView, Image} from 'react-native';
import LoginButton from './src/Component/LoginButton';



const colors = {
  facebook: 'rgb(59, 89, 152)',
  text: 'rgba(255, 255, 255, 0.75)',
  instagramButtonBorderColor: 'rgba(255, 255, 255, 0.35)',
  facebookButtonBorderColor: 'rgba(255, 255, 255, 0.35)'
}

const loginButtonInfo = {
  height: 45,
  pageFontSize: 11,
  borderWidth: 0.8,
  borderRadius: 5
}

const urls = {
  forgotInstagramLogin: 'https://www.instagram.com/accounts/password/reset',
  twitterLogin: 'https://twitter.com/login?lang=en',
  instagramSignUp: 'https://www.instagram.com/accounts/emailsignup/?hl=en',
  instagramAuthLogin: 'https://api.instagram.com/oauth/authorize/?client_id=cda6dee7d8164a868150910407962f52&redirect_uri=http://www.kaitechconsulting.com&response_type=token&scope=basic+follower_list+comments+likes',
  instagramLogout: 'https://instagram.com/accounts/logout',
  instagramBase: 'https://www.instagram.com/',
};


export default class App extends Component {

  constructor(props){
    super(props);
  }

  loginButtonPressed = () => {
    console.log("Button was pressed");
  }


  loginScreenComponent = () => {
    return (
      <ImageBackground
      source={require('./src/images/ibiza-sunset')}
      resizeMode={'cover'} style={viewStyles.container}
      >
      <StatusBar
      baclgroundColor="gray"
      barStyle="light-content"
      />

      <ScrollView>

      <Image
      source={require('./src/images/instagram-text-black.png')}
      style={viewStyles.instagramTextLogo}
      resizeMode={'contian'}
      />
      <LoginButton
      buttonViewStyle={viewStyles.instagramLoginButtonView}
      buttonTextStyle={{color: colors.text, fontWeight: '500'}}
      buttonTapped={this.loginButtonPressed}
      activeOpacity={0.75}
      >
      Login

      </LoginButton>

      </ScrollView>

      </ImageBackground>

    );

  }
  render() {
    return (
      this.loginScreenComponent()
    );
  }

}

const viewStyles = {
  container: {
    flex: 1,
    alignItems: 'center',
  },
  instagramTextLogo: {
    width: 150,
    height: 80,
    marginTop: '65%',
    marginBottom: 25
  },
  instagramLoginButtonView: {
    backgroundColor: 'transparent',
    borderColor: colors.instagramButtonBorderColor,
    borderWidth: loginButtonInfo.borderWidth,
    borderRadius: loginButtonInfo.borderRadius,
    width: '80%',
    height: loginButtonInfo.height,
    justifyContent: 'center',
    alignItems: 'center'
  },

};
const textStyles = {

};
