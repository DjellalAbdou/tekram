import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import {_} from '../../config/i18n/i18n';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../constants/Colors';

class AccountStatememnt extends Component {
  render() {
    return (
      <SafeAreaView>
        <Header
          title={_("accountStatment.title")}
          leftIcon={<Icon name="menu" size={25} color={Colors.$primaryBlue} />}
          drawer
          //rightIcon={<Icon name="search" size={22} color={Colors.$primaryBlue} />}
        />
      </SafeAreaView>
    );
  }
}

export default AccountStatememnt;