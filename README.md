# SocialMedia

## Project Flow:

User Authentication: Users can sign up or log in to their accounts. This process will involve password hashing and storing user credentials securely in the MongoDB database.

User Profile: After authentication, users can create or update their profiles, including profile pictures, bio, and other personal information.

Create Post: Users can create text-based posts or upload media (images, videos) to share with their followers or the public.

Interact with Posts: Users can like, comment on, or share posts created by others. These interactions will be stored in the MongoDB database.

Follow/Unfollow Users: Users can follow or unfollow other users to see their posts in their feed.

Notifications: Users will receive notifications for various activities, such as new followers, likes, comments, or shares on their posts.

Feed: Users can view a personalized feed containing posts from users they follow, sorted by recency or popularity.

Search: Users can search for other users or specific posts based on keywords, hashtags, or user names.

## Architechture Diagram
 +-------------------+
|     Web Client    |
|  (HTML, CSS, JS)  |
+-------------------+
           |
           | HTTP Requests
           |
+-------------------+
|     Web Server    |
|   (Node.js with   |
|   Express.js)     |
+-------------------+
           |
           | CRUD Operations
           |
+-------------------+
|     MongoDB       |
|     Database      |
+-------------------+

