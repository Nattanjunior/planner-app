import { View, Text , Image} from 'react-native';

export default function Index() {
 return (
   <View className='flex-1 items-center justify-center'>
    <Image
      source={require('@/assets/')}
    />
    <Text className='text-zinc-400'>Hello world</Text>
   </View>
  );
}