import { FakeUsers, FetchUsersOptions } from "./types";

export const fetchUsers = async ({
  seed,
  region,
  errorRate,
  batch,
}: FetchUsersOptions): Promise<FakeUsers[]> => {
  const API_URL: string = `https://localhost:3000/api/users?seed=${seed}&region=${region}&errorRate=${errorRate}&batch=${batch}`;
  try {
    const response = await fetch(API_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`${response.statusText}`);
    }

    const responseData: { data: FakeUsers[] } = await response.json();
    return responseData.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
};