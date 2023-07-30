import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import RNFS from 'react-native-fs';


const Graph = ({data}) => {
    console.log(data)
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    // Replace this with your actual byte array
    const byteArray = [137, 80, 78, 71, /* Add more bytes here */];

    // Create a Uint8Array from the byte array
    const uint8Array = new Uint8Array(byteArray);

   

    // Create a temporary file path
    const tempFilePath = RNFS.CachesDirectoryPath + '/temp_image.png';

    

    // Write the bytes to the temporary file
    RNFS.writeFile(tempFilePath, uint8Array, 'base64')
      .then(() => {
        
        setImageUri('file://' + tempFilePath);
      })
      .catch((error) => {
        console.error('Error writing file:', error);
      });

    // Cleanup the temporary file when component unmounts
    return () => {
      console.log('Component unmounted. Deleting temporary file...');
      RNFS.unlink(tempFilePath)
        .then(() => {
          console.log('Temporary file deleted');
        })
        .catch((error) => {
          console.error('Error deleting temporary file:', error);
        });
    };
  }, []);


  return (
    <View>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default Graph



