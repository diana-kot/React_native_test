import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {AgEnum, TextC} from '../UI/Text';
import {PlusIcon} from '../assets/icons/PlusIcon';
import {HeartIcon} from '../assets/icons/HeartIcon';
import {MessageIcon} from '../assets/icons/MessageIcon';
import TelegramIcon from '../assets/icons/TelegramIcon';
import BookmarksIcon from '../assets/icons/BookmarksIcon';

export const PostCard = () => {
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.flexRow}>
          <Image
            style={styles.avatar}
            source={require('../assets/images/image1.png')}
          />
          <TextC style={{marginLeft: 9}} Ag={AgEnum.SUBTITLE}>
            PostCard
          </TextC>
        </View>
        <TouchableOpacity>
          <PlusIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/image1.png')}
        />
      </View>
      <View style={styles.topContainer}>
        <View style={styles.flexRow}>
          <TouchableOpacity>
            <HeartIcon />
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 14}}>
            <MessageIcon />
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 11}}>
            <TelegramIcon />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <BookmarksIcon />
        </TouchableOpacity>
      </View>

      <TextC style={{marginLeft: 9}} Ag={AgEnum.SUBTITLE_STRONG}>
        100 Likes
      </TextC>
      <View>
        <TextC numberOfLines={2} style={{marginLeft: 12}} Ag={AgEnum.SUBTITLE}>
          <TextC style={{marginLeft: 9}} Ag={AgEnum.SUBTITLE_STRONG}>
            Lorem{' '}
          </TextC>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure
        </TextC>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 16,
    paddingVertical: 9,
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: 375,
  },
});
