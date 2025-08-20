import queryClient from '../../queryclient';

const BASE_URL = 'https://dinmaegler.onrender.com';

// This function loads 'bolig' data
export async function boligLoader() {
  return queryClient.fetchQuery({
    queryKey: ['homes'],
    queryFn: fetchBoligData
  });
}
async function fetchBoligData() {
  const response = await fetch(`${BASE_URL}/homes`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

// This function loads 'agents' data
export async function agentsLoader() {
  return queryClient.fetchQuery({
    queryKey: ['agents'],
    queryFn: fetchAgentsData
  });
}
async function fetchAgentsData() {
  const response = await fetch(`${BASE_URL}/agents`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

// This function loads 'detail bolig' data
export async function DetailBoligLoader({ params }) {
  const { id } = params;
  console.log(id);

  return queryClient.fetchQuery({
    queryKey: ['homes', id],
    queryFn: () => fetchBoligDataById(id)
  });
}
async function fetchBoligDataById(id) {
  const response = await fetch(`${BASE_URL}/homes/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

// Create a loader for the 'combined' data
export async function combinedLoader() {
  const [homes, agents] = await Promise.all([boligLoader(), agentsLoader()]);
  return { homes, agents };
}




//await Promise.all([...])
// is used in combinedLoader to run both data fetches at the same time (in parallel), instead of one after the other.
// Why is this good?
// It makes your loader faster, because it doesn't wait for the first fetch to finish before starting the second.
// Both boligLoader() and agentsLoader() start together, and the loader waits until both are done.