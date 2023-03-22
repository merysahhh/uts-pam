import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { gStyle } from '../constants';


const MultiBase = ({ navigation }) => {
  const theme = 'dark';

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.text[theme]}>Ini Halaman Detail Item</Text>

      <View style={gStyle.spacer64} />
    </ScrollView>
  );
};

MultiBase.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default MultiBase;
