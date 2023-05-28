import React, { useState } from 'react'
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

import { checkImageURL } from '../../../utils/index'

import styles from './nearbyjobs.style'
import useFetch from '../../../hook/useFetch';

const NearbyJobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('search',
    {
      query: 'React developer',
      num_pages: 1
    })

  // console.log(data);
  // console.log(error);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Nearby Jobs</Text>
          <TouchableOpacity onPress={() => { alert("Implement Show all") }}>
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
            data?.map((job) => (
              <NearbyJobCard
                job={job}
                key={`nearby-job-${job.job_id}`}
                handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              />
            ))
          )
        }

      </View>
    </View>
  )
}

export default NearbyJobs;
