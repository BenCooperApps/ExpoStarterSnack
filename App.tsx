import { NativeBaseProvider, extendTheme } from 'native-base';
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};
import SongSelection from './components/SongSelection';
import SwipeblePlaylists from './components/ExampleComponent';

export default function App() {
  const customTheme = extendTheme({ config });
  return (
    <NativeBaseProvider theme={customTheme}>
      <SwipeblePlaylists />
    </NativeBaseProvider>
  );
}
