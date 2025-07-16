import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

//checking of stream key and secret
if (!apiKey || !apiSecret) {
  console.error("Stream API KEY or SECRET is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

//for creating a stream user account
export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]); //creates or updates the user
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

//generating stream token
export const generateStreamToken = (userId) => {
  try {
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.log("Error generating Stream token:", error);
  }
};
