import store from '../store/store'
import { selectCurrent } from './movieSlice'
import { redirect } from 'react-router-dom'

export async function loader()
{
    const state=store.getState();
    const currentMovie=selectCurrent(state);
    if(!currentMovie)
      {
        throw redirect('/')
      }
      return null;
}
