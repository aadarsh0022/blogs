type Config = {
  appwriteUrl: string;
  apperiteProjectId: string;
  apperiteDatabaseId: string;
  apperiteCollectionId: string;
  apperiteBucketId: string;
};
const conf: Config = {
  appwriteUrl: process.env.APPWRITE_URL as string,
  apperiteProjectId: process.env.APPERITE_PROJECT_ID as string,
  apperiteDatabaseId: process.env.APPERITE_DATABASE_ID as string,
  apperiteCollectionId: process.env.APPERITE_COLLECTION_ID as string,
  apperiteBucketId: process.env.APPERITE_BUCKET_ID as string,
};

export default conf;
