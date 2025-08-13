import queryClient from '../../queryclient';

export async function boligLoader() {
  return queryClient.fetchQuery({
    queryKey: ['homes'],
    queryFn: fetchBoligData
  });
}

async function fetchBoligData() {
  const response = await fetch('https://dinmaegler.onrender.com/homes');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
