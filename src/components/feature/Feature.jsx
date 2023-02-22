import React from 'react'
import FeatureItem from '../featureItem/FeatureItem'
import FeatureItemSous from '../featureItemSous/FeatureItemSous'
import './feature.css'

const Feature = () => {
  return (
    <>
        <div className="feature">
          <FeatureItem/>
          <FeatureItemSous/>
        </div>
    </>
  )
}

export default Feature