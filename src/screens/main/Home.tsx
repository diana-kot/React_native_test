import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import {Colors} from '../../styles/Colors';

import {PostCard} from '../../components/PostCard';

import LogoIcon from '../../assets/icons/LogoIcon';
import {MessageIcon} from '../../assets/icons/MessageIcon';
import {PlusIcon} from '../../assets/icons/PlusIcon';
import {HeartIcon} from '../../assets/icons/HeartIcon';

import {HistoryData} from '../../store/HistoryData';

import {TextC, AgEnum} from '../../UI/Text';
import { IHistory } from '../../types/HistoryTypes';

import { HistortHelper } from '../../helpers/HistoryHelper';

export const Home = () => {
  return (
    <>
      <View style={styles.topContainer}>
        <LogoIcon />
        <View style={styles.topContainerIcons}>
          <MessageIcon />
          <PlusIcon />
          <HeartIcon />
        </View>
      </View>

      <ScrollView>
        <ScrollView
          horizontal={true}
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          {HistortHelper.getHistory(HistoryData).map((item: IHistory, index) => (
            <View
              style={[styles.historyItem, index === 0 && {marginLeft: 9}]}
              key={item.id}>
              <TouchableOpacity
                style={[
                  styles.historyItemContainer,
                  item.active
                    ? styles.historyItemContainerActive
                    : styles.historyItemContainerInActive,
                ]}>
                <Image style={styles.imageIcon} source={{uri: item.avatar}} />
              </TouchableOpacity>
              <TextC Ag={AgEnum.SUBTITLE} align={'center'}>
                {item.name}
              </TextC>
            </View>
          ))}
        </ScrollView>
        <View>
          {[...Array(10)].map((_, index) => (
            <PostCard key={index} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 20,
  },

  topContainerIcons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },
  imageIcon: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    borderColor: Colors.white,
    borderWidth: 3,
  },

  historyItem: {
    marginRight: 16,
  },

  container: {
    //  padding: 8,
    marginTop: 12,
  },

  historyItemContainer: {
    borderRadius: 60,
    borderWidth: 3,
  },

  historyItemContainerActive: {
    borderColor: Colors.green,
  },
  historyItemContainerInActive: {
    borderColor: Colors.gray,
  },
});
