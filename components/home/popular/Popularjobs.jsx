import React, { useState } from 'react'
import { View, Text } from 'react-native'
import {
  ActivityIndicator,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

import { checkImageURL } from '../../../utils/index'

import styles from './popularjobs.style'
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('search',
    {
      query: 'React developer',
      num_pages: 1
    })

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  // console.log(data);
  // console.log(error);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Popular Jobs</Text>
          <TouchableOpacity onPress={() => { alert("Implement Show all functionality!") }} >
            <Text style={styles.headerBtn}>Show all</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text> Something went Wrong! </Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <PopularJobCard
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={handleCardPress}
                />
              )}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              horizontal
            />
          )
        }

      </View>
    </View>
  )
}

export default Popularjobs
