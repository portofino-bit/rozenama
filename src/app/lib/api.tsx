import type { Data } from './type';

export default async function Get () {

    let data: Data[] = [];
      let error: string | null = null;
    
      try {
        const response = await fetch('https://store.rozenama.com/api/sandbox/cats');
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        data = await response.json();
      } catch (err: unknown) {
        console.error('Failed to fetch posts:', err);
        error = err.message || 'An unknown error occurred while fetching posts.';
      }
      console.log(data)
  return {data, error}
}



