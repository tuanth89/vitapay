import {StyleSheet} from 'react-native';
import {Colors} from '@config/style';

const styles = StyleSheet.create({
  itemView: {
    backgroundColor: Colors.primary,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
    // height: verticalScale(100)
    paddingVertical: 8,
  },

  iconStyle: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 4,
  },
  itemInfo: {
    flex: 0.4,
    justifyContent: 'center',
  },
  name: {
    fontSize: 14,
    marginTop: 2,
    color: Colors.white,
  },
  address: {
    fontSize: 13,
    marginTop: 5,
    color: Colors.white,
  },
  itemDateTime: {
    flex: 0.3,
    justifyContent: 'center',
  },
  timeStyle: {
    alignSelf: 'flex-end',
    fontSize: 13,
    marginTop: 3,
  },
  dateStyle: {
    alignSelf: 'flex-end',
    fontSize: 13,
    marginTop: 7,
  },
});

export default styles;
