import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, Button} from 'react-native';
import {styles} from './style'
 
export default function Feed() {
  
  let img1 = 'http://www.eb.mil.br/image/journal/article?img_id=2794870&t=1365708795370'
  let img2 = 'http://www.eb.mil.br/image/journal/article?img_id=7567200&t=1464450471402'
  let img3 = 'https://i.pinimg.com/originals/17/b8/ff/17b8ff2c97c41b79a93c2774d49d96e1.jpg'
  let img4 = 'https://lh3.googleusercontent.com/proxy/98WbP56G6eDJYGt_jK1uNM0_uC5j9GsjOQ2Bm0qQdjJ81xpVD7i-kvt9PSwhq3bA9fi2xdyTVWbu9SvxiU8lIZxaOUrvuChWHCDn0wBC_otXf9KJEPKFoVBbdv3M-cRU1nNQ3b6UQRmE'
  let img5 = 'https://lh3.googleusercontent.com/proxy/yCWkP30jlUJ3AgGwyiTDu_OTmgRYilJ9uOsyzADS_fmRKsFjVfzHHGYB224e-xbi7erys9JtBH9uhmiShMUGZwNAhN-fvMD9U9fCfXKA7-XI0Z3PfRX0C0Gg9sG7SV3qM-56'
  let img6 = 'http://www.eb.mil.br/image/journal/article?img_id=8592797&t=1517336491773'
  let img7 = 'https://lh3.googleusercontent.com/proxy/XidDd1eiAOD6RjQ-4emL-X6FYjlr_g5jus7mNNSezuE6w5KevNlBjZ7XYR6tD4xv5f-EJ1mv5r2iEZ0i1cGBwinxRocf2CizBjLkEwGFNPUTI0k6bHM'
  let img8 = 'https://lh3.googleusercontent.com/proxy/FBe7f8fFmFCp-_WlHRkeWw7rH0URzJxIJrqX7OvoN15hBZZxP8KL8EwyDXGRP9D5yJbFE2wvMfl9LurLmtek5QJKRK59ruQg8r-D_mLFW9ewXxkPRqpsvxSfaEf8AoQD3Q'

 return (
   <View style={styles.container}>

    <ScrollView style={styles.listImag}>

      <View style={styles.fotos}>
        <Image style={styles.feedImg} source={{uri: img3}} />
        <Image style={styles.feedImg} source={{uri: img2}} />
      </View>

      <View style={styles.fotos}>
        <Image style={styles.feedImg} source={{uri: img1}} />
        <Image style={styles.feedImg} source={{uri: img4}} />
      </View>

      <View style={styles.fotos}>
        <Image style={styles.feedImg} source={{uri: img5}} />
        <Image style={styles.feedImg} source={{uri: img8}} />
      </View>

      <View style={styles.fotos}>
        <Image style={styles.feedImg} source={{uri: img7}} />
        <Image style={styles.feedImg} source={{uri: img6}} />
      </View>

    </ScrollView>
   </View>
  );
}