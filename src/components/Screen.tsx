import {
  SafeAreaView,
  StyleSheet,
  ViewStyle,
  Platform,
  StatusBar,
} from 'react-native';

import {Loader} from './ui/Loader';
import {useLoading} from '../base/hooks/useLoading';

export const Screen = ({
  children,
  style,
}: {
  children: any;
  style?: ViewStyle;
}) => {
  const {loading} = useLoading();

  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle={'dark-content'} />
      {loading ? <Loader /> : children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
