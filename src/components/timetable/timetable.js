import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View } from 'react-native';

const Timetable = props => (
  <View style={styles.resultsWrapper}>
    {
      props.trains.length ? props.trains.map(train => (
        <View style={styles.columnsContainer} key={train.train_uid}>
          <Text style={styles.column}>{train.destination_name}</Text>
          <Text style={styles.column}>{train.aimed_departure_time}</Text>
          <Text style={styles.column}>{train.platform}</Text>
        </View>
      )) : 'No trains found.'
    }
  </View>
);

const styles = StyleSheet.create({
  columnsContainer: {
    display: 'flex'
  },
  column: {
    flex: 1,
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
    minHeight: 50
  },
  resultsWrapper: {
    marginTop: 40
  }
});

const propTypes = {
  trains: PropTypes.array.isRequired
};

Timetable.propTypes = propTypes;

export default Timetable;
