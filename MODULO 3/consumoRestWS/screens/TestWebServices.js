import { View, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base'
import {getAllPostsService, createPostService, updatePostService, getPostsByUserIdService} from '../services/TestServices'
import { getJokeService, createProductService, updateProductService, getDocumentTypes } from '../services/TestServices';

const getAllPosts=()=>{
  getAllPostsService();
}

const createPost = () => {
  createPostService();
};

const updatePost = () => {
  updatePostService();
};

const getByUserId = () => {
  getPostsByUserIdService();
};

const getJoke = () => {
  getJokeService();
};

const createProduct = () => {
  createProductService();
};

const updateProduct = () => {
  updateProductService();
};

const getDocTypes = () => {
  getDocumentTypes();
}


export const TestWebServices = () => {

  return <View style={styles.container}>
    <Text style={styles.textContainer}>MODULO 3</Text>
    <Text style={styles.textContainer}>FUNCIONA CORRECTAMENTE</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Recuperar Posts"
        onPress={getAllPosts}
      />
      <Button
        title="Crear Post"
        onPress={createPost}
      />
        <Button
        title="Actualizar Post"
        onPress={updatePost} 
      />
        <Button
        title="Filtrar"
        onPress={getByUserId}
      />
          <Button
        title="XXX"
        onPress={getJoke}
      />

      <Button
        title="YYY"
        onPress={createProduct}
      />

      <Button
        title="ZZZ"
        onPress={updateProduct}
      />

      <Button
        title="TIPOS DOCUMENTOS"
        onPress={getDocTypes}
      />
      
    </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10
  },
  buttonContainer: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal:10

  }
});