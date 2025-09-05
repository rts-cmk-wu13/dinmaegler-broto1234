import queryClient from '../../queryclient';
import { API_BASE_URL } from "../../config";

// This function loads 'bolig' data
export async function boligLoader() {
  return queryClient.fetchQuery({
    queryKey: ['homes'],
    queryFn: fetchBoligData
  });
}
async function fetchBoligData() {
  const response = await fetch(`${API_BASE_URL}/homes`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

// This function loads 'detail bolig' data
export async function detailBoligLoader({ params }) {
  const { id } = params;
  // console.log(id);

  return queryClient.fetchQuery({
    queryKey: ['homes', id],
    queryFn: () => fetchBoligDataById(id)
  });
}
async function fetchBoligDataById(id) {
  const response = await fetch(`${API_BASE_URL}/homes/${id}`);
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
  const response = await fetch(`${API_BASE_URL}/agents`);
  // const response = await fetch(`${API_BASE_URL}/agents?_limit=5`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

// This function loads 'detail agent' data
export async function detailAgentLoader({ params }) {
  const { id } = params;
  // console.log(id);

  return queryClient.fetchQuery({
    queryKey: ['agents', id],
    queryFn: () => fetchAgentDataById(id)
  });
}
async function fetchAgentDataById(id) {
  if(!id) {
    return null;
  }
  const response = await fetch(`${API_BASE_URL}/agents/${id}`);
  if (!response.ok) {
    return null;
    // throw new Error('Network response was not ok');
  }
  return response.json();
}

// Create a loader for the 'combined = home,agent,detailAgent' data
export async function combinedLoader({ params }) {
  const [homes, agents, detailAgent] = await Promise.all([boligLoader(), agentsLoader(), detailAgentLoader({ params })]);
  return { homes, agents, detailAgent };
}

// New function to fetch paginated homes
export async function paginatedHomesLoader({ limit = 4, start = 0 } = {}) {
  return queryClient.fetchQuery({
    queryKey: ['homes', { limit, start }],
    queryFn: () => fetchPaginatedHomes({ limit, start }),
  });
}
async function fetchPaginatedHomes({ limit = 4, start = 0 } = {}) {
  const response = await fetch(
    `${API_BASE_URL}/homes?_limit=${limit}&_start=${start}`
  );
  if (!response.ok) throw new Error("Failed to fetch homes");
  return response.json();
}

//await Promise.all([...])
// is used in combinedLoader to run both data fetches at the same time (in parallel), instead of one after the other.
// Why is this good?
// It makes your loader faster, because it doesn't wait for the first fetch to finish before starting the second.
// Both boligLoader() and agentsLoader() start together, and the loader waits until both are done.


// // This function loads 'user/:id' data
// export async function userFavorite({ params }) {
//   const { id } = params;
//   // console.log(id);

//   return queryClient.fetchQuery({
//     queryKey: ['users', id],
//     queryFn: () => userFavoriteDataById(id)
//   });
// }
// async function userFavoriteDataById(id) {
//   if (!id) return null;
//   const token = sessionStorage.getItem("token"); // or get from AuthContext
//   console.log("Token:", token);
//   const response = await fetch(`https://dinmaegler.onrender.com/users/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   if (!response.ok) return null;
//   return response.json();
// }

// // New loader for user favorites and homes
// export async function userFavoritesLoader({ params }) {
//   const { id } = params;
//   console.log("User ID param:", id);
//   const [users, homes] = await Promise.all([
//     userFavoriteDataById(id),
//     boligLoader()
//   ]);
//   return { users, homes };
// }
